import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../../services/services/CoursReservationServices/reservation.service';
import {Etat, Reservation} from '../../../services/models/MyModels/reservation';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {ReservationResponse} from '../../../services/models/reservation-response';
import {ReservationRequest} from '../../../services/models/reservation-request';

@Component({
  selector: 'app-mysession',
  templateUrl: './mysession.component.html',
  styleUrls: ['./mysession.component.css']
})
export class MysessionComponent implements OnInit {
public reservations: Array<Reservation> = [];
  public list: ReservationResponse[] = [];
  dateR: Date = new Date();
  constructor(private reservationService: ReservationService,
              private service: ReservationControllerService) {
  }

  ngOnInit(): void {
    this.getReservationForStudent();
  }

  // tslint:disable-next-line:typedef
  getReservationForStudent(): void {
    this.service.getReservationByOwnerStudent().subscribe({
      next: (value) => this.list = value,
      error: (error) => console.error('Failed to fetch reservations:', error)
    });
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
        this.getReservationForStudent();
      },
      error => {
        console.log(error);
      }
    );
  }


}
