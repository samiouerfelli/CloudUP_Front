import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ReservationService} from '../../../services/services/CoursReservationServices/reservation.service';
import {TimeSlotService} from '../../../services/services/CoursReservationServices/time-slot.service';
// @ts-ignore
import {Etat, Reservation} from '../../../services/models/reservation';
// @ts-ignore
import {TimeSlot} from '../../../services/models/timeslot';
// @ts-ignore
import {User} from '../../../services/models/user';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public selectedProfessorId!: any  ;
  public selectedCoursId!: any ;
  timeSlots!: any[];
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  selectedDay!: string;

  public professor!: User ;
  public reservation!: Reservation ;
  public daterange: any = {};
  reservationDate = new Date(); // Current date and time
  reservationStatus = Etat.Pending;
  public selectedDate!: string;




  constructor(private reservationService: ReservationService,
              private timeSlotService: TimeSlotService,
              private route: ActivatedRoute,
              private router: Router, ) { }


  selectedSlot: TimeSlot | null = null;


  selectSlot(slot: TimeSlot): void {
    console.log('Selected slot:', slot);
    if (slot && slot.startTime) {
      this.selectedSlot = slot;
      this.reservationDate = new Date(slot.startTime);
    } else {
      console.error('Slot or slot.startTime is undefined');
    }
  }

  // tslint:disable-next-line:typedef
  loadAvailableTimeSlots(professorId: number) {
    this.timeSlotService.getAvailableTimeSlots(professorId).subscribe(
      (slots) => {
        this.timeSlots = slots;
      },
      (error) => {
        console.error('Error fetching time slots', error);
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedProfessorId = +params.professorId; // The '+' converts the parameter to a number
      this.selectedCoursId = +params.coursID; // Likewise for coursID
      // ...
    });
  }
  private formatDate(date: string): string {
    // You will need to convert this date to the format your backend expects
    // This is just a placeholder; you'll need to implement the actual conversion
    return date;
  }

  // tslint:disable-next-line:typedef
  /* addReservation(etudiantID: number, selectedProfessorId: number, selectedCoursId: number) {
     if (!this.selectedSlot) {
       alert('Please select a time slot first.');
       return;}
     const reservation = {
       dateR: this.formatDate(this.selectedDate),

       statusR: this.reservationStatus
     };
     console.log('Sending reservation data:', reservation);


     this.reservationService.addReservation(reservation, etudiantID, selectedProfessorId, selectedCoursId).subscribe({
       next: (response) => {console.log('Reservation added:', response);
                            this.router.navigateByUrl(`/students/booking-success`); },
       error: (error) => console.error('Error adding reservation:', error)
     });
   }*/

// tslint:disable-next-line:typedef
  addReservation(etudiantID: number, selectedProfessorId: number, selectedCoursId: number) {
    if (this.selectedSlot && this.selectedSlot.startTime) {
      const reservationData = {
        dateR: this.selectedSlot.startTime,
        statusR: this.reservationStatus
      };

      console.log('Reservation data being sent:', reservationData);

      this.reservationService.addReservation(reservationData, etudiantID, selectedProfessorId, selectedCoursId)
        .subscribe({
          next: (response) => {console.log('Reservation added:', response);
                               this.router.navigateByUrl(`/students/booking-success`); },
          error: (error) => console.error('Error adding reservation:', error)}

        );
    } else {
      console.error('No time slot selected or start time is undefined.');
    }
  }




  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value; // The value will be in "yyyy-MM-dd" format
  }

  selectDay(day: string): void {
    this.selectedDay = day;
    // Fetch the time slots for the selected day from your service
    this.timeSlotService.getTimeSlotsForDay(this.selectedProfessorId, day).subscribe(
      slots => {
        this.timeSlots = slots;
      },
      error => {
        console.error('Error fetching time slots:', error);
        this.timeSlots = [];
      }
    );
  }

}
