import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReclamationService } from '../reclamation.service';
import { Reclamation } from '../reclamation';
import * as moment from 'moment';


@Component({
  selector: 'app-recformulaire',
  templateUrl: './recformulaire.component.html',
  styleUrls: ['./recformulaire.component.css']
})
export class RecformulaireComponent implements OnInit{
reclamation!:Reclamation[];
RecForm: FormGroup;
Categorie: string [] = [
  'Utilisateur',
  'Cours',
  'Business',
  'Evenement'
];
  time: string | Date | undefined;

constructor (private fb: FormBuilder,public dialogRef: MatDialogRef<RecformulaireComponent>,
  private recs: ReclamationService, @Inject(MAT_DIALOG_DATA) public data: {title: string,reclamation:Reclamation,view:boolean}) {
  this.RecForm=this.fb.group({
    id: [null],
    objet: [null,Validators.required],
    type: [null,Validators.required],
    description:[null,Validators.required],
    time:[null],

  });
}
  ngOnInit(): void {
    if(this.data.reclamation)
    {
        this.time = this.data.reclamation ? this.data.reclamation.time : '';
        const creationTime = moment(this.data.reclamation.time, 'DD/MM/YYYY HH:mm:ss');
        const currentTime = moment();
        const diffSeconds = currentTime.diff(creationTime, 'seconds');
        
        if (diffSeconds > 1000) {
          this.data.view=true
        }
      const updatereclam = {
        id:this.data.reclamation.id,
        objet:this.data.reclamation.objet,
        type:this.data.reclamation.type,
        description:this.data.reclamation.description,
        time:this.data.reclamation.time 
      };

      this.RecForm.setValue(updatereclam)
      if(this.data.view)
      this.RecForm.disable()
    }
  }
  
  onFormSubmit() {
    if (this.RecForm.valid)
    {
      if (this.data.reclamation?.id)
      {
        this.recs.UpdateReclams(this.RecForm.value).subscribe( 
          (res)=>{console.log(res);
            this.closeDialog("Modification avec succés!")},
          ()=>{this.closeDialog("Erreur")})
      }
      else
      {

      this.recs.AddReclams(this.RecForm.value).subscribe( 
        (res)=>{console.log(res);
          this.closeDialog("Ajout avec succés!")},
        ()=>{this.closeDialog("Erreur")})
        }
    }
  }
  closeDialog(msg:string) { 
    this.dialogRef.close(msg);
  }
  }


