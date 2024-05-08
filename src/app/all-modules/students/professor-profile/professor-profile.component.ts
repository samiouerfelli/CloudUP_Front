import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../eventService/UserProfileService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../../../services/services/authentification.service";
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../eventService/Evenement.service';
import * as moment from 'moment';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {
  showajoutForm: boolean =  false; // Flag for showing the ajout form
  showajoutSForm: boolean =  false; // Flag for showing the ajout form
  showajoutEForm: boolean =  false; // Flag for showing the ajout form

  token = localStorage.getItem('token');

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
  addAwardForm!: FormGroup;
  addSpForm!: FormGroup;
  addEForm!: FormGroup;

  UserId: string | null = null;
allaward:any;
  userProfile: any; // Declare userProfile property to store retrieved user profile
allsp:any;
alledu:any;

  constructor(     private PostService:PostService,   private route: ActivatedRoute,
    private router: Router,    private userProfileService: UserProfileService,private fb: FormBuilder,private authentificationService:AuthentificationService){ }

  ngOnInit(): void {
    this.UserId = this.route.snapshot.paramMap.get('UserId');
    this.userProfileService.getUserProfileSpeciality(Number(this.UserId)).subscribe(
      responseData=>{
        this.allsp=responseData;
      }
    )
    this.userProfileService.getUserProfileEducation(Number(this.UserId)).subscribe(
      responseData=>{
        this.alledu=responseData;
      }
    )
    this.userProfileService.getUserProfileAward(Number(this.UserId)).subscribe(
      response=>{
        this.allaward=response;
      }
    )
    this.getUserProfile(Number(this.UserId)); // Replace 2 with the actual user ID
    this.addAwardForm = this.fb.group({
      name: ['', Validators.required],
      date_Debut: ['', Validators.required],
    });
    this.addSpForm = this.fb.group({
      speciality: ['', Validators.required],
    });
    this.addEForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],

      date_Debut: ['', Validators.required],
      date_fin: ['', Validators.required]

    });
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
  ajoutuser() {

    this.showajoutForm = true; // Show the update form
  }
  ajoutSp() {

    this.showajoutSForm = true; // Show the update form
  }
  cancelS(){
    this.showajoutSForm= false;
  }
  ajoutE() {

    this.showajoutEForm = true; // Show the update form
  }
  cancelE(){
    this.showajoutEForm= false;
  }
  cancelAjout() {
    this.showajoutForm = false; // Set showAjoutForm to false to hide the ajout form
  }
  onSubmitAward() {
    const nom = this.addAwardForm.controls['nom'].value;

    if (this.addAwardForm.valid) {
      this.userProfileService.addAward(nom,1).subscribe(() => {
        // Handle success, e.g., show a success message
        console.log('Award added successfully');
        // Reset form
        this.addAwardForm.reset();
      }, error => {
        // Handle error, e.g., show an error message
        console.error('Error adding award:', error);
      });
    }}
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
    this.userProfileService.updateProfile(Number(this.UserId), this.userProfile)}
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
  ajoutCollaboration(event: any) {
    this.showajoutForm = true;
    event.preventDefault();
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

  getIDUSER(token: any): Observable<number> {
    return this.PostService.getIDFromToken(token);

  }
  onSubmitE(): void {
    this.getIDUSER(this.token).subscribe(

      (idu: number) => {

        const formattedDateDebut = moment(this.addEForm.controls['date_Debut'].value).add(1,"day").toISOString(); // Convert to ISO 8601 format
        const name = this.addEForm.controls['name'].value;
        const formattedDateFin = moment(this.addEForm.controls['date_fin'].value).toISOString(); // Convert to ISO 8601 format
        const location = this.addEForm.controls['location'].value;

const ase = {
          name:name,
          location:location,
          userId: Number(this.UserId), // Assuming you have userId defined in your component
          dateDebut:formattedDateDebut.substring(0,10),
          dateFin:formattedDateFin.substring(0,10)

        };
        console.log(name)
        console.log('ID de l\'utilisateur récupéré:', idu)
        this.userProfileService.addE(ase).subscribe(() => {
          this.ngOnInit()
          this.cancelE()
          // Handle success, e.g., show a success message
          console.log('Award added successfully');
          // Reset form
          this.addAwardForm.reset();
  })});

}
  onSubmit(): void {
    this.getIDUSER(this.token).subscribe(

      (idu: number) => {

        const formattedDateDebut = moment(this.addAwardForm.controls['date_Debut'].value).add(1,"day").toISOString(); // Convert to ISO 8601 format
        const name = this.addAwardForm.controls['name'].value;
const awardData = {
          name:name,
          userId: Number(this.UserId), // Assuming you have userId defined in your component
          recievedDate:formattedDateDebut.substring(0,10)
        };
        console.log(name)
        console.log('ID de l\'utilisateur récupéré:', idu)
        this.userProfileService.addaward(awardData).subscribe(() => {
          this.ngOnInit()
          this.cancelAjout()
          // Handle success, e.g., show a success message
          console.log('Award added successfully');
          // Reset form
          this.addAwardForm.reset();
  })});

}
onSubmitSp(): void {
  this.getIDUSER(this.token).subscribe(

    (idu: number) => {

      const speciality = this.addSpForm.controls['speciality'].value;
const SpData = {
        speciality:speciality,
        userId: Number(this.UserId), // Assuming you have userId defined in your component
      };
      console.log("spécialité : ", speciality);
      console.log(SpData)
      console.log(name)
      console.log('ID de l\'utilisateur récupéré:', idu)
      this.userProfileService.addS(SpData).subscribe(() => {
        this.ngOnInit()
        this.cancelS()
        // Handle success, e.g., show a success message
        console.log('Award added successfully');
        // Reset form
        this.addAwardForm.reset();
})});
}}
