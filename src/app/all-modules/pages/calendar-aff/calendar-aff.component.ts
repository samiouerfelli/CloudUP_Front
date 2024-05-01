import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../service/Evenement.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UpdateEventPopupComponent } from '../update-event-popup/update-event-popup.component';

@Component({
  selector: 'app-calendar-aff',
  templateUrl: './calendar-aff.component.html',
  styleUrls: ['./calendar-aff.component.css']
})
export class CalendarAffComponent {
  eventId: string | null = null;
  isParticipating: boolean = false; // Declare isParticipating as a boolean
event:any
participantCount: number = 0;
daysLeft: number | null = null;
daysLeftEnd: number =0;

  eventStatus: string = '';
  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private dialog: MatDialog,
    private router: Router,
  ) { }


  ngOnInit(): void {

    this.eventId = this.route.snapshot.paramMap.get('eventId');

    if (this.eventId) {
      // Fetch event details by ID
      this.PostService.getEvenementById(Number(this.eventId)).subscribe(
        (data: any) => {
          this.event = data;
          console.log("Event Details:", this.event);
          const currentDate = new Date();
console.log(currentDate.getDay())
console.log(this.event.dateDebut)
const eventStartDate = this.parseDate(this.event.dateDebut);
const eventEnd = this.parseDate(this.event.dateFin);

const timeDifference = eventStartDate.getTime() - currentDate.getTime();
const timeDifferenceEnd = eventEnd.getTime() - currentDate.getTime();

const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
const daysDifferenceEnd = Math.ceil(timeDifferenceEnd / (1000 * 3600 * 24)); // Convert milliseconds to days

if (daysDifference > 0) {
            this.daysLeft = daysDifference;
            this.eventStatus = 'starts ';
          } else if (daysDifference<0 && daysDifferenceEnd >0) {
            this.daysLeftEnd=daysDifferenceEnd;
            this.eventStatus = 'Event ends in ';
          }
          else{
            this.eventStatus=' Event ended '
          }
          // Check if the user is participating
          this.PostService.isParticipating(Number(this.eventId), 1).subscribe(
            (isParticipating: boolean) => {
              this.isParticipating = isParticipating;
              localStorage.setItem('isParticipating', JSON.stringify(isParticipating));
            },
            (error) => {
              console.error('Error checking participation status:', error);
            }
          );
        },
        (error) => {
          console.error('Error fetching event details:', error);
        }
      );
      this.PostService.getParticipantCount(Number(this.eventId)).subscribe(
        (count: number) => {
          this.participantCount = count;
          console.log("Participant Count:", this.participantCount);
        },
        (error:any) => {
          console.error('Error fetching participant count:', error);
        }
      );
    }
  }
  private participatingStatus = localStorage.getItem('isParticipating');
  if (participatingStatus:any) {
    this.isParticipating = JSON.parse(participatingStatus);
  }

  deleteUser(eventId: number) {
    this.PostService.Deletepart(eventId)
      .subscribe(
        (response: any) => {
          this.router.navigate(['/pages/calendar']); // Navigate to home page

        },
        (error: HttpErrorResponse) =>
          alert(error.message)

      );}
  openUpdateEventPopup(): void {
    const dialogRef = this.dialog.open(UpdateEventPopupComponent, {
      width: '500px',
      data: { event: this.event }
    });
  }
  addParticipant(userId: number) {
    this.PostService.addParticipant(Number(this.eventId), userId).subscribe(
      (response: any) => {
        console.log('Participant added successfully!');
        this.isParticipating = true;
        localStorage.setItem('isParticipating', JSON.stringify(true));
      },
      (error) => {
        console.error('Error adding participant:', error);
        // Handle error (e.g., display error message)
      }
    );
  }

  removeParticipant(userId: number) {
    this.PostService.removeParticipant(Number(this.eventId), userId).subscribe(
      (response: any) => {
        console.log('Participant removed successfully!');
        this.isParticipating = false;
        localStorage.removeItem('isParticipating');
      },
      (error) => {
        console.error('Error removing participant:', error);
        alert('Error removing participant: ' + error.message);
      }
    );
  }
  reportEvent() {

      this.PostService.reportEvent(this.event.id)
        .subscribe(
          (reportedEvent) => {
            console.log("Event reported successfully:", reportedEvent);
            // Update local event object if needed (optional)
            // Display success message using toastr or similar
          },
          (error) => {
            console.error("Error reporting event:", error);
            // Display error message using toastr or similar
          }
        );

  }
  parseDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month in JavaScript Date object is 0-indexed
  }

}

