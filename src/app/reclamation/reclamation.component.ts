import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecformulaireComponent } from '../recformulaire/recformulaire.component';
import { ReclamationService } from '../reclamation.service';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../reclamation';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
  providers: [ ReclamationService ] 
})

export class ReclamationComponent implements OnInit{
  reclamation:Reclamation[] = [];

  constructor(private _dialog: MatDialog, private http:HttpClient,private recs:ReclamationService,
    private snackBar:MatSnackBar) {}

  openAddFormulaire() {
    
    this._dialog.open(RecformulaireComponent,{
      data:{ 
        title:"Ajouter une reclamation"},
    }).afterClosed().subscribe(
      result=> {this.snackBar.open(result,'',{duration: 1000});
      this.GetAllReclams();
      }
    );
  }


  ngOnInit(): void {
    this.GetAllReclams()
  }
  GetAllReclams()
  {
    this.recs.getReclams().subscribe((data) => {this.reclamation=data;});
  }
  UpdateReclams(reclamation:Reclamation)
  {
    this._dialog.open(RecformulaireComponent,{
      data:{ 
        title:"Modifier reclamation",
        reclamation:reclamation},
    }).afterClosed().subscribe(
      result=> {this.snackBar.open(result,'',{duration: 1000});
      this.GetAllReclams();
      }
    );
  }
  
}
