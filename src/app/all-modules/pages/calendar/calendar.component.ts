import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../../eventService/Evenement.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { AddEventComponent } from 'src/app/all-modules/pages/add-event/add-event.component';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
declare var FullCalendar: any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  calendarEl: any;
  events: any[] = []; // Array to store fetched events
  selectedEvent: any;
  event:any;
  constructor(   private postService: PostService, private snackBar:MatSnackBar, private http:HttpClient,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar');
    console.log("aaaaaaaaaaa")
    const colors: any = {
      red: {
        primary: '#4466f2',
        secondary: '#FAE3E3'
      }}
    this.postService.GetAll().subscribe(
      (data) => {
        this.events = data.map((event:any) => ({
          id:event.id,
          description:event.description,
          maxparticipant:event.maxparticipant,
          lieu:event.lieu,
          title: event.nom,
          start: event.dateDebut,
          imgevent:event.imgevent,
          end: event.dateDebut,
          organisateur:event.organisateur_id_user,
          color: 'red'
        }));
console.log(data)
      const today = new Date(); // Get today's date
var t= new Date()
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialDate: new Date(),
          editable: true,
          selectable: true,
          businessHours: true,
          draggable: true,
          dayMaxEvents: true,
          headerToolbar: {
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,dayGridWeek,dayGridDay',
          },
          themeSystem: 'bootstrap',
          events: this.events,
          select: this.handleDateSelect.bind(this),
          eventClick: this.handleEventClick.bind(this),
          eventDrop: this.handleEventDrop.bind(this),

          backgroundColor: '#007bff', // Change background color
          borderColor: '#007bff' // Change border color
        });

        calendar.render();
      },
      (error) => {
        console.error('Error fetching events:', error);
      }

    );

  }
  handleEventDrop(info: any) {

    this.selectedEvent = info.event ;
    var formattedDateDebut = moment(this.selectedEvent.start).add(1,"day").toISOString();

    const formattedDateDebuut=formattedDateDebut.substring(0,10)
    console.log("zadazdthis.selectedEvent",this.selectedEvent.description)
    this.postService.getEvenementById(Number(info.event.id)).subscribe(
      (data: any) => {
        console.log(data);
        this.event=data;
        this.event.dateDebut=formattedDateDebuut;
    this.postService.updateEvent(info.event.id,this.event ).subscribe(
      (updatedEvent: any) => {
console.log(updatedEvent,"ba3d subscribe")
      },
      (error) => {
        console.error('Error updating event start date:', error);
        // Handle error (e.g., display an error message)
      }  )
    });}



  handleDateSelect(info:any) {
    const selectedDate = info.startStr; // Get the selected date string
    console.log(selectedDate)
    this.openDialog(selectedDate); // Open dialog passing the selected date
  }


  handleEventClick(info:any) {
    this.selectedEvent = info.event;
    console.log("Selected Event:", this.selectedEvent.title);
    this.router.navigate(['/pages/calendar-event-aff', this.selectedEvent.id]);
  }
 openDialog(selectedDate?: string): void {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = { selectedDate };
  const dialogRef = this.dialog.open(AddEventComponent,dialogConfig)

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.snackBar.open(result,'',{duration: 1000})

      this.events.push(result);
      this.calendarEl.fullCalendar('renderEvents', this.events);
    }
  });
 }

}
