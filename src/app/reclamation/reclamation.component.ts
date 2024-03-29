import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecformulaireComponent } from '../recformulaire/recformulaire.component';
import { ReclamationService } from '../reclamation.service';
import { HttpClient } from '@angular/common/http';

export class Reclamation {
  constructor(
  id:number,
  description:string,
  object:string,
  type:string,
  traite:string,
  ) {

  }
}

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
  providers: [ ReclamationService ] 
})

export class ReclamationComponent implements OnInit{
  reclamation:any;

  constructor(private _dialog: MatDialog, private http:HttpClient,private recs:ReclamationService) {}

  openAddFormulaire() {
    this._dialog.open(RecformulaireComponent);
  }

  ngOnInit(): void {
    this.recs.getReclams().subscribe((data) => console.log(this.reclamation=data));
  }
}
