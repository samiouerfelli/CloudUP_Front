import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursServiceService} from '../../../services/services/CoursReservationServices/cours-service.service';
// @ts-ignore
import {Cours} from '../../../services/models/MyModels/cours';
import {CoursControllerService} from '../../../services/services/cours-controller.service';
import {PageResponseCoursResponse} from '../../../services/models/page-response-cours-response';
@Component({
  selector: 'app-get-cours',
  templateUrl: './get-cours.component.html',
  styleUrls: ['./get-cours.component.css']
})
export class GetCoursComponent implements OnInit {
  constructor(private coursService: CoursServiceService,
              private router: Router,
              private service: CoursControllerService ) {
  }


  public courses: Array<Cours> = [];
  cours!: any;
  public keyword!: string;
  public page = 0;
  pages: any = [];
  public size = 10;



  public coursResponse: PageResponseCoursResponse = {};


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.fetchCoursByOwner();
  }
  // tslint:disable-next-line:typedef
  fetchCoursByOwner() {
    this.service.findCoursByOwner({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (cours) => {
        this.coursResponse = cours ;
        this.pages = Array(this.coursResponse.totalPages)
        .fill(0)
        .map((x, i) => i);
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
        next: (cours: PageResponseCoursResponse) => {
          this.coursResponse = cours ;
          this.pages = Array(this.coursResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
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
  get isLastPage() {
    return this.page === this.coursResponse.totalPages as number - 1;
  }

  // tslint:disable-next-line:typedef
  gotToPage(page: number) {
    this.page = page;
    this.fetchCoursByOwner();
  }

  // tslint:disable-next-line:typedef
  goToFirstPage() {
    this.page = 0;
    this.fetchCoursByOwner();
  }

  // tslint:disable-next-line:typedef
  goToPreviousPage() {
    this.page --;
    this.fetchCoursByOwner();
  }

  // tslint:disable-next-line:typedef
  goToLastPage() {
    this.page = this.coursResponse.totalPages as number - 1;
    this.fetchCoursByOwner();
  }

  // tslint:disable-next-line:typedef
  goToNextPage() {
    this.page++;
    this.fetchCoursByOwner();
  }
  // tslint:disable-next-line:typedef
  handleEditCours(idCours: number) {
    this.router.navigateByUrl(`/instructors/update-course/${idCours}`);
  }
}

