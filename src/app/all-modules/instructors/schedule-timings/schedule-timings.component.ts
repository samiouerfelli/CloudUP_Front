import {Component, OnInit} from '@angular/core';
import {TimeSlotService} from '../../../services/services/CoursReservationServices/time-slot.service';
import {SlotsControllerService} from '../../../services/services/slots-controller.service';

@Component({
  selector: 'app-schedule-timings',
  templateUrl: './schedule-timings.component.html',
  styleUrls: ['./schedule-timings.component.css']
})
export class ScheduleTimingsComponent implements OnInit {
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  selectedDay!: string ;
  timeSlots!: any[];
  professorId = 1;


  constructor(private timeSlotService: TimeSlotService,
              private service: SlotsControllerService) {
  }

  // tslint:disable-next-line:typedef
  saveSlot(formData: any) {
    const startDateTime = this.formatDateTime(formData.date, formData.time);
    const endDateTime = this.formatDateTime(formData.date, formData.endTime);
    const date = new Date(formData.date);
    const day = date.toLocaleString('en-US', {weekday: 'long'});
    let newTimeSlot: { dayOfWeek: string; startTime: string; endTime: string };
    newTimeSlot = {
      startTime: startDateTime,
      endTime: endDateTime,
      dayOfWeek: day.toUpperCase()
    };
    const params = {
      body: newTimeSlot
    };

    this.service.saveSlot(params).subscribe({
      error: err => {
        console.log('Error saving time slot:', err);
        alert('There was an error saving the time slot.');
      },
      next: response => {
        console.log('TimeSlot saved:', response);
        alert('TimeSlot ajouté avec succès');
        this.selectDay(params.body.dayOfWeek);
        this.service.getSlotsOfConnectedUserOnly({day: params.body.dayOfWeek});
      }
    });


  }

  formatDateTime(date: string, time: string, hoursToAdd = 0): string {
    const timeParts = time.split(':');
    const dateObj = new Date(date);
    // tslint:disable-next-line:radix
    dateObj.setHours(parseInt(timeParts[0]) + hoursToAdd, parseInt(timeParts[1]));

    // Convert to ISO string and remove seconds and milliseconds
    return dateObj.toISOString().slice(0, 16) + ':00';
  }


  ngOnInit(): void {
    this.selectDay ("MONDAY");
  }

  selectDay(day: string): void {
    this.selectedDay = day;
    // Fetch the time slots for the selected day from your service
    this.service.getSlotsOfConnectedUserOnly({day}).subscribe(
      slots => {
        this.timeSlots = slots;
      },
      error => {
        console.error('Error fetching time slots:', error);
        this.timeSlots = [];
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteSlot(slotId: number) {
    if (!confirm('Are you sure you want to delete this TimeSlot?')) {
      return;
    }
    this.service.deleteCours({idS: slotId}).subscribe(
      value => {
        this.timeSlots = this.timeSlots.filter(slot => slot.id !== slotId);
      },
      error => {
        console.error('Failed to delete time slot', error);
      });
  }
}

