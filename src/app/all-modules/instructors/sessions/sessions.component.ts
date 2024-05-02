import {Component, OnInit} from '@angular/core';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {Etat, ReservationResponse} from '../../../services/models/reservation-response';
import {ReservationRequest} from '../../../services/models/reservation-request';
import { Router } from '@angular/router';

import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

export class SessionsComponent implements OnInit {
  public list: ReservationResponse[] = [];
  public list2: ReservationResponse[] = [];

  constructor(private service: ReservationControllerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getReservationForProfessor();
  }
  /* ----- */

  getReservationForStudent(): void {
    this.service.getReservationByOwnerStudent().subscribe({
      next: (value) => this.list2 = value,
      error: (error) => console.error('Failed to fetch reservations:', error)
    });
  }

  cancelReservation2(Reservation: ReservationResponse) {
    const id = Reservation.idR;
    const request: ReservationRequest = {
      statusR : Etat.Canceled,
      idR: id
    };
    this.service.updateReservationStatus({ body: request}).subscribe(
      updatedReservation => {
        this.getReservationForStudent();
      },
      error => {
        console.log(error);
      }
    );
  }


  updateReservationDate(reservationID: any,professorId : any){
    this.router.navigate(['/students/booking', {reservationID,professorId}]);
    environment.isReservationSaved=true;
  }

/* ---------- */
  // tslint:disable-next-line:typedef
  getReservationForProfessor(): void {
    this.service.getReservationByOwnerProfeesor().subscribe({
      next: (value) => this.list = value,
      error: (error) => console.error('Failed to fetch reservations:', error)
    });
  }
  // tslint:disable-next-line:typedef no-shadowed-variable
  confirmReservation( Reservation: ReservationResponse) {
    const id = Reservation.idR;
    const request: ReservationRequest = {
      statusR : Etat.Confirmed,
      idR: id
    };
    // this.service.getReservationById({idReservation: id});
    this.service.updateReservationStatus({ body: request}).subscribe(
      updatedReservation => {
        this.getReservationForProfessor();
      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef no-shadowed-variable
  cancelReservation(Reservation: ReservationResponse) {
    const id = Reservation.idR;
    const request: ReservationRequest = {
      statusR : Etat.Canceled,
      idR: id
    };
    this.service.updateReservationStatus({ body: request}).subscribe(
      updatedReservation => {
        this.getReservationForProfessor();
      },
      error => {
        console.log(error);
      }
    );
  }


}
