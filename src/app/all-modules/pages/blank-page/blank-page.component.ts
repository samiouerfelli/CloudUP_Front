import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {User} from "../../../services/models/user";


@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {


  users: Array<User> = [];


  constructor( private service: AuthentificationService) { }

  ngOnInit(): void {
    this.getAllUsers();

  }

  // tslint:disable-next-line:typedef
  private getAllUsers() {
   /* this.service.findAll().subscribe({
      next : data => {
        this.users = data;
      },
      error : err => {
        console.log(err);
      }
    });*/

  }
}
