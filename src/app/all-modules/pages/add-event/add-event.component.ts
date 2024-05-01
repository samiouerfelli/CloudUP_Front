import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl  } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../service/Evenement.service';
import { GoogleMap } from '@angular/google-maps';
import {CategorieEvenementService}from  '../../service/CategorieEvenementService'
import * as moment from 'moment';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  submitted = false;
  form!: FormGroup;
  categories: any[] = []; // Array to store categories

  @ViewChild('pickerDebut') pickerDebut: any;
  @ViewChild('pickerFin') pickerFin: any;

  constructor(public dialogRef: MatDialogRef<AddEventComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private form_builder: FormBuilder, private service: PostService, private catservice:CategorieEvenementService) { }

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
        categorie: ['', Validators.required]
      });
    } else {
      this.form = this.form_builder.group({
        lieu: ['', Validators.required],
        nom: ['', Validators.required],
        description: ['', Validators.required],
        date_Debut: ['', Validators.required],
        date_Fin: ['', Validators.required],
        categorie: ['', Validators.required]

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
    const formattedDateDebut = moment(this.form.controls['date_Debut'].value).toISOString(); // Convert to ISO 8601 format
    const formattedDateFin = moment(this.form.controls['date_Fin'].value).toISOString();
    const categoryId = this.form.controls['categorie'].value; // Get the selected category ID

    this.catservice.getCategorieEvenementById(categoryId).subscribe(
      (category) => {
        this.service.ajoutPart(
          lieu,
          nom,
          description,
          formattedDateDebut,
          formattedDateFin,
          category  ).subscribe(
                  data => {
                    this.onClose("Ajout avec succés!");

        window.location.reload();
      },
      err => {
      }
    );
  }
    )
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
