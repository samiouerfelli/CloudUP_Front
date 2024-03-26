import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
