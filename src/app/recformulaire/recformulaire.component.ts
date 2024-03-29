import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-recformulaire',
  templateUrl: './recformulaire.component.html',
  styleUrls: ['./recformulaire.component.css']
})
export class RecformulaireComponent {
RecForm: FormGroup;
Categorie: string [] = [
  'Utilisateur',
  'Cours',
  'Business',
  'Evenement'
];
constructor (private fb: FormBuilder) {
  this.RecForm=this.fb.group({
    Objet: [],
    Categorie: [],
    Description:[],
  });
}
  onFormSubmit() {
    if (this.RecForm.valid)
    {
      console.log(this.RecForm.value);
    }
  }



}
