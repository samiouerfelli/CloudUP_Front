import {Component, OnInit} from '@angular/core';
import { CoursControllerService } from '../services/services';
import { CoursParticuliers, User } from '../services/models';
import { TokenService } from '../services/token/token.service';
import {Router} from "@angular/router";
import {PublicationService} from "../service/publication.service";
import {Publication} from "../model/publication.model";
import { Evenement } from '../services/models';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { PostService } from '../all-modules/eventService/Evenement.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token = localStorage.getItem('token');

  UserId!: number;
  constructor(private PostService:PostService,private publicationService: PublicationService, private router: Router,private service:CoursControllerService ) {
  }
  slideIndex = 1;

  // tslint:disable-next-line:typedef
  plusSlides(n: any) {
    this.currentSlide(n)
  };

  // tslint:disable-next-line:typedef
  currentSlide(n: any) {
    // tslint:disable-next-line:indent
    this.showSlides(this.slideIndex = n);
  }

  // tslint:disable-next-line:typedef
  showSlides(ne: any) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('testi-user-img');
    if (ne > slides.length) {
      this.slideIndex = 1
    }
    if (ne < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("d-none");
      slides[i].className = slides[i].className.replace("d-block", "d-none");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].classList.add("d-block");
    dots[this.slideIndex - 1].className += " active";
  }
public List: CoursParticuliers[]=[];
public ListProf: User[]=[];

fetchTopProfessor()
{
  this.service.getTopProfessor().subscribe({
    next : (user) =>
      {
      console.log("top professor fetch successfully");
      this.ListProf=user;
      },
      error : (err) => {console.log(err);}
  })
}


fetchTopCourses()
  {
this.service.getTopCourses().subscribe({
  next : (cours) =>
    {
    console.log("top courses fetch successfully");
    this.List=cours;
    },
    error : (err) => {console.log(err);}
})
  }
  popularcoursesCarouselOptions = {
    loop: true,
    margin: 15,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      },
      1300: {
        items: 2
      }
    }
  };



/*
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.fetchTopCourses();
    this.fetchTopProfessor();

  }
*/


  coursesCarouselOptions = {
    loop: true,
    margin: 15,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  };
  /*
  popularcoursesCarouselOptions = {
    loop: true,
    margin: 15,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      },
      1300: {
        items: 2
      }
    }
  };*/
  coursesCarouselslides = [
    {
      img: "assets/img/universities/c1.jpg",
      course: "Design",
      count: "19 Courses",
      img2: "assets/img/universities/c5.jpg",
      course2: "Business",
      count2: "19 Courses",
    },
    {
      img: "assets/img/universities/c2.jpg",
      course: "Software Development",
      count: "17 Courses",
      img2: "assets/img/universities/c6.jpg",
      course2: "Web Development",
      count2: "17 Courses",
    },
    {
      img: "assets/img/universities/c3.jpg",
      course: "Photography",
      count: "14 Courses",
      img2: "assets/img/universities/c7.jpg",
      course2: "Marketing",
      count2: "14 Courses",
    },
    {
      img: "assets/img/universities/c4.jpg",
      course: "3D + Animation",
      count: "15 Courses",
      img2: "assets/img/universities/c8.jpg",
      course2: "Audio + Music",
      count2: "15 Courses",
    },
    {
      img: "assets/img/universities/c1.jpg",
      course: "Design",
      count: "19 Courses",
      img2: "assets/img/universities/c5.jpg",
      course2: "Business",
      count2: "19 Courses",
    },
    {
      img: "assets/img/universities/c2.jpg",
      course: "Software Development",
      count: "17 Courses",
      img2: "assets/img/universities/c6.jpg",
      course2: "Web Development",
      count2: "17 Courses",
    },
  ];
  eventList!:Observable<Evenement[]> ;

  publicationList: Observable<Publication[]> | undefined;
  errorMessage: any;
  p: Publication | undefined;
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef


  // tslint:disable-next-line:typedef


  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.getPublication1();
    this.getEvent();
    this.fetchTopCourses();
    this.fetchTopProfessor();
    this.getIDUSER(this.token).subscribe(

      (idu: number) => {
        this.UserId=Number(idu)
      })
  }

  getPublication1(): void {
    this.publicationList = this.publicationService.getPublications().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  getEvent(): void {
    this.eventList = this.PostService.GetAll().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  getIDUSER(token: any): Observable<number> {
    return this.PostService.getIDFromToken(token);

  }
  redirectToDetails(publication: Publication): void {
    const idpub = publication.idpub;
    console.log('l id de la pub récupérée:' + idpub);
    // Rediriger vers la page de détails avec l'ID de la publication
    this.router.navigate(['/blog/blog-details', idpub]);
  }
  redirectToDetails2(event: Evenement): void {
    const idpub = event.id;
    console.log('l id de la pub récupérée:' + idpub);
    // Rediriger vers la page de détails avec l'ID de la publication
    this.router.navigate(['/pages/calendar-event-aff', idpub]);
  }
}
