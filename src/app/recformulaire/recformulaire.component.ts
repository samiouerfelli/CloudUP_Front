import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReclamationService } from '../reclamation.service';


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
constructor (private fb: FormBuilder,public dialogRef: MatDialogRef<RecformulaireComponent>,
  private recs: ReclamationService) {
  this.RecForm=this.fb.group({
    objet: [null,Validators.required],
    type: [null,Validators.required],
    description:[null,Validators.required],
  });
}
  onFormSubmit() {
    if (this.RecForm.valid)
    {
      this.recs.AddReclams(this.RecForm.value).subscribe( 
        (res)=>{console.log(res);
          this.closeDialog("Ajout avec succés!")},
        ()=>{this.closeDialog("Erreur")})
      
    }
  }
  closeDialog(msg:string) { 
    this.dialogRef.close(msg);
  }
  }


