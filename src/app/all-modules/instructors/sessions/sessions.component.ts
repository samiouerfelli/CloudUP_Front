import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../../services/services/CoursReservationServices/reservation.service';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {Etat, ReservationResponse} from '../../../services/models/reservation-response';
import {ReservationRequest} from '../../../services/models/reservation-request';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

export class SessionsComponent implements OnInit {
  public list: ReservationResponse[] = [];
  constructor(private service: ReservationControllerService) {
  }

  ngOnInit(): void {
    this.getReservationForProfessor();
  }

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
