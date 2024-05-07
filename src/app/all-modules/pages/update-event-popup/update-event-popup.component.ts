import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { PostService } from '../../service/Evenement.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-event-popup',
  templateUrl: './update-event-popup.component.html',
  styleUrls: ['./update-event-popup.component.css']
})
export class UpdateEventPopupComponent {
  event: any;
  selectedFile: File | null = null;
  fileToUpload: File | null = null; // Property to hold the selected file
  imageFile: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateEventPopupComponent>,
    private evenementService: PostService
  ) {
    this.event = data.event;
  }
   // Function to handle file input change event
   handleFileInput(event: any): void {
    this.imageFile = event.target.files[0];
  }

  updateEvent(): void {
    if (this.imageFile) {
      // Convert image file to Base64 format
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = reader.result?.toString().split(',')[1]; // Extract base64 string
        this.event.imgevent = base64String; // Set the Base64 string to the event object
        this.updateEventWithData();
      };
      reader.readAsDataURL(this.imageFile);
    } else {
      this.updateEventWithData();
    }
  }

  // Function to handle update after handling image file
  updateEventWithData(): void {
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
