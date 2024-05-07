import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl  } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../eventService/Evenement.service';
import { GoogleMap } from '@angular/google-maps';
import { CategorieEvenementService } from '../../eventService/CategoryEvenementService';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../../../services/services/authentification.service";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  form!: FormGroup;
  categories: any[] = []; // Array to store categories
  token = localStorage.getItem('token');

  @ViewChild('pickerDebut') pickerDebut: any;
  @ViewChild('pickerFin') pickerFin: any;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor( private authservice: AuthentificationService,public dialogRef: MatDialogRef<AddEventComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private form_builder: FormBuilder, private service: PostService, private catservice:CategorieEvenementService) { }

  ngOnInit(): void {

    this.catservice.getAllCategoriesEvenement().subscribe(
      (data2) => {
        this.categories = data2; // Assign fetched categories to the property
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
    if (this.data && this.data.selectedDate) {
      this.form = this.form_builder.group({
        lieu: ['', Validators.required],
        nom: ['', Validators.required],
        description: ['', Validators.required],
        date_Debut: [this.data.selectedDate, Validators.required], // Set selected date as default value
        date_Fin: ['', Validators.required],
        categorie: ['', Validators.required],
        max:['', Validators.required]
      });
    } else {
      this.form = this.form_builder.group({
        lieu: ['', Validators.required],
        nom: ['', Validators.required],
        description: ['', Validators.required],
        date_Debut: ['', Validators.required],
        date_Fin: ['', Validators.required],
        categorie: ['', Validators.required],
        max:['', Validators.required]
      });
  }
}

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const lieu = this.form.controls['lieu'].value;
    const nom = this.form.controls['nom'].value;
    const description = this.form.controls['description'].value;
    const formattedDateDebut = moment(this.form.controls['date_Debut'].value).add(1,"day").toISOString(); // Convert to ISO 8601 format
    const formattedDateFin = moment(this.form.controls['date_Fin'].value).toISOString();;
    const categoryId = this.form.controls['categorie'].value; // Get the selected category ID
    const max = this.form.controls['max'].value;
    console.log(formattedDateDebut.substring(0,10))
    console.log(formattedDateFin)
      // Retrieve the file from the file input element
  const fileInput = this.fileInput.nativeElement;
  const file = fileInput.files[0];
  this.getIDUSER(this.token).subscribe(
    (idu: number) => {
      console.log('ID de l\'utilisateur récupéré:', idu);

    this.catservice.getCategorieEvenementById(categoryId).subscribe(
      (category) => {
        // this.service.ajoutPart(
        //   lieu,
        //   nom,
        //   description,
        //   formattedDateDebut,
        //   formattedDateFin,
        //   category  )
        this.service.addColla(file, nom, description, formattedDateDebut.substring(0,10), formattedDateFin.substring(0,10), lieu,max,idu,categoryId).subscribe(
                  data => {
                    this.onClose("Ajout avec succés!");

        window.location.reload();
      },
      err => {
      }
    );
  }
    )
  })
}
  getIDUSER(token: any): Observable<number> {
    return this.authservice.getIDFromToken(token);

  }
  onClose(msg:string) {
    this.dialogRef.close(msg);
  }

  onDateTimeChangeDebut(selected: any) {
    this.form.get('date_Debut')?.setValue(selected.toISOString()); // Convert to ISO 8601 format
  }

  onDateTimeChangeFin(selected: any) {
    this.form.get('date_Fin')?.setValue(selected.toISOString()); // Convert to ISO 8601 format
  }
}
