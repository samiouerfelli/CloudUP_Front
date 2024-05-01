import { Component, Inject } from '@angular/core';
import { PostService } from '../../service/Evenement.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-event-popup',
  templateUrl: './update-event-popup.component.html',
  styleUrls: ['./update-event-popup.component.css']
})
export class UpdateEventPopupComponent {
  event: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateEventPopupComponent>,
    private evenementService: PostService
  ) {
    this.event = data.event;
  }

  updateEvent(): void {
    this.evenementService.updateEvent(this.event.id, this.event)
      .subscribe(
        (updatedEvent: any) => {
          // Optionally handle success response
          this.dialogRef.close(updatedEvent); // Close the dialog
        },
        (error: any) => {
          console.error('Error updating event:', error);
          // Optionally handle error response
        }
      );
  }
  onClose() {
    this.dialogRef.close();
  }

}
