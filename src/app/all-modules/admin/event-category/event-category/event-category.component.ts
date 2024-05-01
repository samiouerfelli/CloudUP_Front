import { Component, OnInit } from '@angular/core';
import { CategorieEvenementService } from 'src/app/all-modules/service/CategorieEvenementService';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { AddEventComponent } from '../add-event/add-event.component';
import {MatDialog} from '@angular/material/dialog';
import { CategorieEvenement } from 'src/app/all-modules/service/CategoryEvenement'
@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.css']
})
export class EventCategoryComponent implements OnInit {

  UsersArray: CategorieEvenement[] = [];
  isResultLoaded = false;
  showajoutForm: boolean =  false; // Flag for showing the ajout form
  user: CategorieEvenement = { nom: ''};

  constructor(private service: CategorieEvenementService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCategoriesEvenements();

  }
  getAllCategoriesEvenements() {
    this.service.getAllCategoriesEvenement().subscribe((resultData: any) => {
      this.isResultLoaded = true;
      this.UsersArray = resultData;
      console.log("Data received:", resultData);

    });
  }
  ajoutuser(user: any) {

    this.showajoutForm = true; // Show the update form
  }
  cancelAjout() {
    this.showajoutForm = false; // Set showAjoutForm to false to hide the ajout form
  }
  ajoutPart(partenaires: any) {
    this.service.addCategorieEvenement(partenaires)
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
        deleteUser(userId: any) {
          this.service.deleteCategorieEvenement(userId)
            .subscribe(
              (response: any) => {
                this.getAllCategoriesEvenements(); // Refresh the user list after deletion
              },
              (error: HttpErrorResponse) =>
                alert(error.message)

            );
            location.reload(); // Reload the page after successful submission

  }

}
