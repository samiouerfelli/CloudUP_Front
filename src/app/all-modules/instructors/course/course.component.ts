import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../../Models/user.model';
import {Cours} from '../../../Models/cours.model';
import {CoursServiceService} from '../../../Services/cours-service.service';
import {ReservationService} from '../../../Services/reservation.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public professor!: User;
  public courses!: Array<Cours>;
  public keyword!: string;



  constructor(private coursService: CoursServiceService,
              private reservationService: ReservationService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getCours();
  }

  // tslint:disable-next-line:typedef
  getCours() {
    this.coursService.getCours().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  // tslint:disable-next-line:typedef
  searchCourse() {
    if (!this.keyword) {
      this.getCours();
    } else {
      this.coursService.searchCourse(this.keyword).subscribe({
        next : value => {
          this.courses = value; },
        error: (err) => {
          console.error('NomCours NotFound', err);
        }
      });
    }}


  // tslint:disable-next-line:typedef
  bookCourse(professorId: number, coursID: number) {
    this.router.navigate(['/students/booking', { professorId, coursID }]);
  }




}
