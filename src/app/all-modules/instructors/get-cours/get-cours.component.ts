import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursServiceService} from '../../../services/services/CoursReservationServices/cours-service.service';
// @ts-ignore
import {Cours} from '../../../services/models/cours';

@Component({
  selector: 'app-get-cours',
  templateUrl: './get-cours.component.html',
  styleUrls: ['./get-cours.component.css']
})
export class GetCoursComponent implements OnInit {
  public courses: Array<Cours> = [];
  public keyword!: string;
  constructor(private coursService: CoursServiceService,
              private router: Router ) {
  }

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
  handleDeleteCours(cr: Cours) {
    // tslint:disable-next-line:max-line-length
    if (confirm('Are you sure you want to delete this course?')) {
      this.coursService.deleteCourse(cr).subscribe({
        next: (value) => {
          this.courses = this.courses.filter(c => c.idCours !== cr.idCours);
          console.log('Delete successful');
          // this.getCours(); // Refresh the list
        },
        error: (error) => {
          console.error('Error deleting course:', error);
        }
      });
    }
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
  handleEditCours(idCours: number) {
    this.router.navigateByUrl(`/instructors/update-course/${idCours}`);
  }
}
