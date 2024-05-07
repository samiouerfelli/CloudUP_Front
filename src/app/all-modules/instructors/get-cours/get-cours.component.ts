import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursServiceService} from '../../../services/services/CoursReservationServices/cours-service.service';
// @ts-ignore
import {Cours} from '../../../services/models/MyModels/cours';
import {CoursControllerService} from '../../../services/services/cours-controller.service';
import { AuthentificationService } from 'src/app/services/services';
import { CoursResponse, User } from 'src/app/services/models';
@Component({
  selector: 'app-get-cours',
  templateUrl: './get-cours.component.html',
  styleUrls: ['./get-cours.component.css']
})
export class GetCoursComponent implements OnInit {
  constructor(private coursService: CoursServiceService,
              private router: Router,
              private authService: AuthentificationService,

              private service: CoursControllerService ) {
  }


  public courses: Array<Cours> = [];
  cours!: any;
  public keyword!: string;
  public page = 0;
  pages: any = [];
  public size = 10;
  public user! : User;



  public coursResponse: CoursResponse[] = [];


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.fetchCoursByOwner();
    this.authService.getUser().subscribe(user => { this.user=user});

  }
  // tslint:disable-next-line:typedef
  fetchCoursByOwner() {
    this.service.findCoursByOwner().subscribe({
        next: (cours) => {
          this.coursResponse = cours ;
        }
      }

    );


  }
  // tslint:disable-next-line:typedef
  searchCourse() {
    if (!this.keyword) {
      this.fetchCoursByOwner();
    } else {
      this.service.findCoursByName({name : this.keyword}).subscribe({
        next: (cours) => {
          this.coursResponse = cours ;
        },
        error: (err) => {
          console.error('Nom Cours Not Found', err);
        }
      });
    }
  }
  // tslint:disable-next-line:typedef
  handleDeleteCours(coursID: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.service.deleteCours1({idC: coursID}).subscribe({
        next: (value) => {
          console.log('Delete successful');
          this.fetchCoursByOwner();
        },
        error: (error) => {
          console.error('Error deleting course:', error);
        }
      });
    }
  }


  // tslint:disable-next-line:typedef
  handleEditCours(idCours: number) {
    this.router.navigateByUrl(`/instructors/update-course/${idCours}`);
  }
}

