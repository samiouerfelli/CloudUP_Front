import { Component, OnInit } from '@angular/core';
import {error} from 'protractor';
import {ReservationService} from '../../../services/services/CoursReservationServices/reservation.service';
import {Etat, Reservation} from '../../../services/models/MyModels/reservation';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

export class SessionsComponent implements OnInit {
  public reservations: Array<Reservation> = [];
  dateR: Date = new Date();
  constructor(private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  // tslint:disable-next-line:typedef
  loadAppointments() {
    this.reservationService.getReservation().subscribe(
      data => {
        this.reservations = data;
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.error('Error fetching appointments', error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  confirmReservation(reservation: Reservation) {
    reservation.statusR = Etat.Confirmed; // Update the status to confirmed
    this.reservationService.updateReservationStatus(reservation).subscribe(
      updatedReservation => {
        this.loadAppointments();
      },
      error => {
        console.error('Error confirming reservation', error);
        // Handle error, such as showing an error message to the user
      }
    );
  }

  // tslint:disable-next-line:typedef
  cancelReservation(reservation: Reservation) {
    reservation.statusR = Etat.Canceled; // Update the status to cancelled
    this.reservationService.updateReservationStatus(reservation).subscribe(
      updatedReservation => {
        this.loadAppointments();
      },
      error => {
        console.error('Error cancelling reservation', error);
        // Handle error
      }
    );
  }


}
