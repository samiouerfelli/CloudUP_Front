import { Component, OnInit } from '@angular/core';
import {TimeSlotService} from '../../../services/services/CoursReservationServices/time-slot.service';

@Component({
  selector: 'app-schedule-timings',
  templateUrl: './schedule-timings.component.html',
  styleUrls: ['./schedule-timings.component.css']
})
export class ScheduleTimingsComponent implements OnInit {
  days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  selectedDay!: string;
  timeSlots!: any[];
  professorId = 1;




  constructor(private timeSlotService: TimeSlotService) {}


  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  saveNewSlot(formData: any) {
    const startDateTime = this.formatDateTime(formData.date, formData.time);
    const endDateTime = this.formatDateTime(formData.date, formData.endTime);
    const date = new Date(formData.date);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const professorId = 1 ;

    const newTimeSlot = {
      startTime: startDateTime,
      endTime: endDateTime,
      dayOfWeek:  dayOfWeek.toUpperCase(),
      professor: { id: professorId }
    };

    this.timeSlotService.addTimeSlot(professorId, newTimeSlot).subscribe(
      response => {
        console.log('TimeSlot saved:', response);
        alert('TimeSlot ajouté avec succès');
        // this.fetchTimeSlotsForProfessor();
        this.selectedDay = dayOfWeek;
        this.selectDay(dayOfWeek);
        this.timeSlotService.getTimeSlotsForDay(this.professorId, dayOfWeek);
      },
      error => {
        console.error('Error saving time slot:', error);
        alert('There was an error saving the time slot.');

        // Handle the error appropriately
      }
    );
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
    // Other initialization logic
  }

  fetchTimeSlotsForProfessor(): void {
    this.timeSlotService.getTimeSlots(this.professorId).subscribe(
      (slots) => {
        this.timeSlots = slots;
      },
      (error) => {
        console.error('Error fetching time slots for professor:', error);
      }
    );
  }

  selectDay(day: string): void {
    this.selectedDay = day;
    // Fetch the time slots for the selected day from your service
    this.timeSlotService.getTimeSlotsForDay(this.professorId, day).subscribe(
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
    if (confirm('Are you sure you want to delete this TimeSlot?')) {

      this.timeSlotService.deleteTimeSlot(slotId).subscribe(
        () => {
          this.timeSlots = this.timeSlots.filter(slot => slot.id !== slotId);
        },
        error => {
          console.error('Failed to delete time slot', error);
        }
      );
    }
  }




}
