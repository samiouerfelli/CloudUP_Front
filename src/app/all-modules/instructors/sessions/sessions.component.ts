import {Component, OnInit} from '@angular/core';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {Etat, ReservationResponse} from '../../../services/models/reservation-response';
import {ReservationRequest} from '../../../services/models/reservation-request';
import {Router} from '@angular/router';

import {environment} from '../../../../environments/environment';
import {OtpControllerService} from '../../../services/services/otp-controller.service';
import { User } from 'src/app/services/models';
import { AuthentificationService } from 'src/app/services/services';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

export class SessionsComponent implements OnInit {
  public list: ReservationResponse[] = [];
  public list2: ReservationResponse[] = [];

  constructor(private service: ReservationControllerService,
              private smsService: OtpControllerService,
              private authService: AuthentificationService,

              private router: Router) {
  }
  public user! : User;

  ngOnInit(): void {
    this.getReservationForProfessor();
    this.authService.getUser().subscribe(user => { this.user=user});

  }

  /* ----- */

  getReservationForStudent(): void {
    this.service.getReservationByOwnerStudent().subscribe({
      next: (value) => this.list2 = value,
      error: (error) => console.error('Failed to fetch reservations:', error)
    });
  }

  // tslint:disable-next-line:typedef
  cancelReservation2(Reservation: ReservationResponse) {
    const id = Reservation.idR;
    const request: ReservationRequest = {
      statusR: Etat.Canceled,
      idR: id
    };
    this.service.updateReservationStatus({body: request}).subscribe(
      updatedReservation => {
        this.getReservationForStudent();
      },
      error => {
        console.log(error);
      }
    );
  }


  // tslint:disable-next-line:typedef
  updateReservationDate(reservationID: any, professorId: any) {
    this.router.navigate(['/students/booking', {reservationID, professorId}]);
    environment.isReservationSaved = true;
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
  confirmReservation(Reservation: ReservationResponse) {
    const id = Reservation.idR;
    const request: ReservationRequest = {
      statusR: Etat.Confirmed,
      idR: id
    };
    // this.service.getReservationById({idReservation: id});
    this.service.updateReservationStatus({body: request}).subscribe(
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
      statusR: Etat.Canceled,
      idR: id
    };
    this.service.updateReservationStatus({body: request}).subscribe(
      updatedReservation => {
        this.getReservationForProfessor();
      },
      error => {
        console.log(error);
      }
    );
  }


  sendSmsConfirmation(reservationResponse: ReservationResponse): void {
    console.log(reservationResponse);
    this.smsService.sendReservationConfirmationSms({body: reservationResponse}).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);

      }
    });

  }

  sendSmsCancelation(reservationResponse: ReservationResponse): void {
    console.log(reservationResponse);
    this.smsService.sendReservationCancelationSms({body: reservationResponse}).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);

      }
    });

  }
}
