import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cours} from '../../../services/models/MyModels/cours';
import {User} from '../../../services/models/user';
import {CoursControllerService} from '../../../services/services/cours-controller.service';
import { AuthentificationService } from 'src/app/services/services';
import { CoursResponse } from 'src/app/services/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public professor!: User;
  public courses!: Array<Cours>;
  // tslint:disable-next-line:variable-name
  public keyword!: string;
  public coursResponse: CoursResponse[] = [];
  pages: any = [];
  isProfessor: boolean = false;
  idOwner: any ;

  constructor(private service: CoursControllerService,
              private router: Router,
            private authService: AuthentificationService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.isProfessor = user.roles === 'Professor';
      this.idOwner = user.idUser;

    });
    
    this.fetchAllCours();
  }

  // tslint:disable-next-line:typedef
  fetchAllCours() {
    this.service.findAllCours().subscribe({
      next: (value) => {
        this.coursResponse = value;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // tslint:disable-next-line:typedef
  bookCourse(professorId: any, coursID: number) {
    this.router.navigate(['/students/booking', {professorId, coursID}]);
  }


// tslint:disable-next-line:typedef
  searchCourse() {
    if (!this.keyword) {
      this.fetchAllCours();
    } else {
      this.service.findCoursByName({name: this.keyword}).subscribe({
        next: (cours) => {
          this.coursResponse = cours;
        },
        error: (err) => {
          console.error('Nom Cours NotFound', err);
        }
      });
    }
  }


}
