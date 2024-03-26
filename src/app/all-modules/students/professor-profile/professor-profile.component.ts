import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {
  images = [
    {
      path: 'assets/img/insta/1.jpg',
    },
    {
      path: 'assets/img/insta/3.jpg',
    },
    {
      path: 'assets/img/insta/2.jpg',
    },
    {
      path: 'assets/img/insta/4.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
