import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {Etat} from '../../../services/models/MyModels/reservation';

// @ts-ignore
import {SlotsControllerService} from '../../../services/services/slots-controller.service';
import {ReservationControllerService} from '../../../services/services/reservation-controller.service';
import {ReservationRequest, ReservationResponse, TimeSlotResponse} from 'src/app/services/models';
import {environment} from '../../../../environments/environment';
import {OtpControllerService} from "../../../services/services/otp-controller.service";
import {sendReservationDetails} from "../../../services/fn/otp-controller/send-reservation-details";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor(private service: SlotsControllerService,
              private serviceReservation: ReservationControllerService,
              private smsService: OtpControllerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public selectedProfessorId!: any;
  public selectedCoursId!: any;
  public selectedReservation!: any;
  public selectedReservationProfessor!: any;

  public status: any = environment.isReservationSaved;

  timeSlots!: any[];
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  selectedDay!: string;
  reservationDate = new Date(); // Current date and time
  reservationStatus = Etat.Pending;
  public selectedDate!: any;
  selectedSlot: TimeSlotResponse | null = null;
  public list2: ReservationResponse[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedProfessorId = +params.professorId;
      this.selectedCoursId = +params.coursID;
    });
    this.route.params.subscribe(param => {
      this.selectedReservation = +param.reservationID;
      this.selectedReservationProfessor = +param.professorId;
    });
  }


  // tslint:disable-next-line:typedef
  editReservationDate(selectedReservation: any) {
    let request: ReservationRequest;

    if (this.selectedSlot && this.selectedSlot.startTime) {
      request = {
        idR: this.selectedReservation,
        dateR: this.selectedSlot.startTime
      };
      console.log('Reservation data being sent:', request);

      this.serviceReservation.updateReservationDate({body: request}).subscribe(
        next => {
          environment.isReservationSaved = false;
          this.status = false;
          this.router.navigate(['/instructors/sessions']),
            this.getReservationForStudent();

        });
    }
  }

  getReservationForStudent(): void {
    this.serviceReservation.getReservationByOwnerStudent().subscribe({
      next: (value) => this.list2 = value,
      error: (error) => console.error('Failed to fetch reservations:', error)
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
      this.serviceReservation.saveReservation({body: request, idCours: selectedCoursId}).subscribe({
        next: (response) => {
          console.log('Reservation added:', response );
          // Call the method to send SMS
          this.smsService.sendReservationDetails({body: response}).subscribe({
            next: (smsResponse) => {
              console.log('SMS Confirmation sent:', smsResponse);
              this.router.navigateByUrl(`/students/booking-success`);
            },
            error: (smsError) => {
              console.error('Error sending SMS confirmation:', smsError);
              this.router.navigateByUrl(`/students/booking-success`);
            }
          });
        },
        error: (error) => console.error('Error adding reservation:', error)
      });
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


  /*selectedReservationProfessor*/
  selectDayForReservation(day: string): void {
    this.selectedDay = day;
    this.service.getSlotsForBooking({userID: this.selectedReservationProfessor, day}).subscribe(
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



