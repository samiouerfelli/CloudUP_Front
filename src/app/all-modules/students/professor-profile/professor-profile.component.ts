import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../service/UserProfileService';
@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {
  showajoutForm: boolean =  false; // Flag for showing the ajout form

  images = [
    {
      path: 'assets/img/insta/1.jpg',
    },
    {
      path: 'assets/img/insta/3.jpg',
    },
    {
      path: 'assets/img/insta/2.jpg',
    },
    {
      path: 'assets/img/insta/4.jpg',
    },
  ];
  userProfile: any; // Declare userProfile property to store retrieved user profile

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.getUserProfile(2); // Replace 2 with the actual user ID
  }

  addUserProfile(): void {
    const newUser: any = { /* Define your user object based on the User interface */ };
    this.userProfileService.addUserProfile(newUser).subscribe(
      response => {
        console.log('User profile added successfully', response);
        // Handle success (e.g., navigate to profile view)
      },
      error => {
        console.error('Error adding user profile', error);
        // Handle error (e.g., display error message)
      }
    );
  }
  ajoutuser(user: any) {

    this.showajoutForm = true; // Show the update form
  }
  cancelAjout() {
    this.showajoutForm = false; // Set showAjoutForm to false to hide the ajout form
  }
  ajoutPart(partenaires: any) {
    this.userProfileService.addUserProfileEducation(partenaires)
      .subscribe({
        next: (resultData: any) => {
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Partenaire ajouté avec succès!',
          //   showConfirmButton: false,
          //   timer: 1500 // Show the success message for 3 seconds
          // }).then(() => {
          //   console.log(resultData);
          //   setTimeout(() => {
              location.reload(); // Reload the page after 3 seconds
            // }, 1500); // Wait for 3 seconds before reloading
          }});
        }
  updateEventWithData(): void {
    this.userProfileService.updateProfile(2, this.userProfile)}
  deleteUserProfile(userId: number): void {
    // Implement confirmation logic (optional)
    this.userProfileService.deleteUserProfile(userId).subscribe(
      response => {
        console.log('User profile deleted successfully', response);
        // Handle success (e.g., navigate back to user list)
      },
      error => {
        console.error('Error deleting user profile', error);
        // Handle error (e.g., display error message)
      }
    );
  }

  getUserProfile(userId: number): void {
    this.userProfileService.getUserProfile(userId).subscribe(
      user => {
        console.log('User profile retrieved successfully', user);
        this.userProfile = user; // Update userProfile property
      },
      error => {
        console.error('Error retrieving user profile', error);
        // Handle error (e.g., display error message)
      }
    );
  }
}
