import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecformulaireComponent } from '../recformulaire/recformulaire.component';
import { ReclamationService } from '../reclamation.service';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../reclamation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDeleteComponent } from '../confirmation-delete/confirmation-delete.component';
import { DialogRef } from '@angular/cdk/dialog';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from '../chat/chat.component';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
  providers: [ ReclamationService ] 
})

export class ReclamationComponent implements OnInit{
  reclamation:any;
  search: string = "";
  page: number=0;
  size: number=10;
  x!:number;
  index!:number;
  constructor(private _dialog: MatDialog, private http:HttpClient,private recs:ReclamationService,
    private snackBar:MatSnackBar,private offcanvasService :NgbOffcanvas) {}

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
    this.recs.getRs(this.page,this.size).subscribe((data:any) => {
      console.log(data)
      this.reclamation=data.content;
    })
  }
  UpdateReclams(reclamation:Reclamation)
  {
    this._dialog.open(RecformulaireComponent,{
      data:{ 
        title:"Modifier reclamation",
        reclamation:reclamation,
        view:false
      },
    }).afterClosed().subscribe(
      result=> {this.snackBar.open(result,'',{duration: 1000});
      this.GetAllReclams();
      }
    );
  }
  DeleteReclams(recid: number)
  {
    this._dialog.open(ConfirmationDeleteComponent,{
      
    }).afterClosed().subscribe((result)=>
    {
      if(result)
      {this.recs.DeleteReclams(recid).subscribe((res) => 
        {this.snackBar.open('Supprimé avec succés','',{duration: 1000});
        this.GetAllReclams()
      })}
      else
      {
        this.snackBar.open('Transaction annulé','',{duration: 1000})
      }
    }
    )
      
      
    
  }
  RetrieveObjet()
  { 
    if (this.search)
    {
    console.log(this.search)
      this.recs.FindObjet(String (this.search)).subscribe((data) => {
        console.log(data)
        if(data) 
        {console.log("a")
          this.reclamation=data 
          console.log(this.reclamation)}
        else 
        {console.log("data not found..")}
      
      },err => {
        console.log("erreur")
      });
    }  
}
ViewDetails (reclamation:Reclamation)
{
  this._dialog.open(RecformulaireComponent,{
    data:{ 
      title:"Details",
      reclamation:reclamation,
      view:true
      },
  });
  
}

}