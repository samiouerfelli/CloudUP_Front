import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/models';
import { AuthentificationService, ReservationControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {
  public data :User[] = [];
  constructor(private service :ReservationControllerService,
    private authService: AuthentificationService
   ) { }
  public user! : User;

  ngOnInit(): void {
    this.fetchAllStudents();
    this.authService.getUser().subscribe(user => { this.user=user});

  }

  fetchAllStudents() {
    this.service.getMyStudents().subscribe({
      next: (value) => {
        this.data = value;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
