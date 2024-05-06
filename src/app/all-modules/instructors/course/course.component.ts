import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cours} from '../../../services/models/MyModels/cours';
import {CoursServiceService} from '../../../services/services/CoursReservationServices/cours-service.service';
import {ReservationService} from '../../../services/services/CoursReservationServices/reservation.service';
import {User} from '../../../services/models/user';
import {CoursControllerService} from '../../../services/services/cours-controller.service';
import {PageResponseCoursResponse} from '../../../services/models/page-response-cours-response';

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
  public coursResponse: PageResponseCoursResponse = {};
  pages: any = [];


  constructor(private coursService: CoursServiceService,
              private reservationService: ReservationService,
              private service: CoursControllerService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
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
        next: (cours: PageResponseCoursResponse) => {
          this.coursResponse = cours;
          this.pages = Array(this.coursResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        },
        error: (err) => {
          console.error('Nom Cours NotFound', err);
        }
      });
    }
  }


}
