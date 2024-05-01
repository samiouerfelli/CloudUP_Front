import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {Etat} from '../../../services/models/MyModels/reservation';

// @ts-ignore
import {SlotsControllerService} from '../../../services/services/slots-controller.service';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {ReservationRequest, TimeSlotResponse} from 'src/app/services/models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public selectedProfessorId!: any;
  public selectedCoursId!: any;
  timeSlots!: any[];
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  selectedDay!: string;
  reservationDate = new Date(); // Current date and time
  reservationStatus = Etat.Pending;
  public selectedDate!: any;
  selectedSlot: TimeSlotResponse | null = null;


  constructor(private service: SlotsControllerService,
              private serviceReservation: ReservationControllerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedProfessorId = +params.professorId;
      this.selectedCoursId = +params.coursID;
    });
  }

// tslint:disable-next-line:typedef
  addReservation(selectedCoursId: number) {
    let request: ReservationRequest;
    if (this.selectedSlot && this.selectedSlot.startTime) {
      request = {
        statusR: this.reservationStatus,
        dateR: this.selectedSlot.startTime
      };
      console.log('Reservation data being sent:', request);
      this.serviceReservation.saveReservation({body: request, idCours: selectedCoursId}).subscribe(
        {
          next: (response) => {
            console.log('Reservation added:', response);
            this.router.navigateByUrl(`/students/booking-success`);
          },
          error: (error) => console.error('Error adding reservation:', error)

        }
      );

    } else {
      console.error('No time slot selected or start time is undefined.');
    }
  }




  selectDay(day: string): void {
    this.selectedDay = day;
    this.service.getSlotsForBooking({userID: this.selectedProfessorId, day}).subscribe(
      slots => {
        this.timeSlots = slots;
      },
      error => {
        console.error('Error fetching time slots:', error);
        this.timeSlots = [];
      }
    );
  }

  selectSlot(slot: TimeSlotResponse): void {
    console.log('Selected slot:', slot);
    if (slot && slot.startTime) {
      this.selectedSlot = slot;
      this.reservationDate = new Date(slot.startTime);
    } else {
      console.error('Slot or slot.startTime is undefined');
    }
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value; // The value will be in "yyyy-MM-dd" format
  }


}



