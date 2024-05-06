import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecformulaireComponent } from '../recformulaire/recformulaire.component';
import { ReclamationService } from '../servicesalah/reclamation/reclamation.service';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from '../reclamation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDeleteComponent } from '../confirmation-delete/confirmation-delete.component';
import { DialogRef } from '@angular/cdk/dialog';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from '../chat/chat.component';
import { error } from 'console';


@Component({
  selector: 'app-reclamarchives',
  templateUrl: './reclamarchives.component.html',
  styleUrls: ['./reclamarchives.component.css'],
  providers: [ ReclamationService ]
})

export class ReclamarchivesComponent implements OnInit{
  reclamation:any;
  search: string = "";
  page: number=0;
  size: number=10;
  sortBy:string="id";
  sortOrder:string="desc";
  pages!:Array<number>
  temps:any;
  canEdit: boolean = true;
  data: any;
  constructor(private _dialog: MatDialog, private http:HttpClient,private recs:ReclamationService,
    private snackBar:MatSnackBar,private offcanvasService :NgbOffcanvas) {}

  ngOnInit(): void {
    this.GetAllReclamsA()
  }

  SetPage(i:number)
  {
    this.page=i;
    this.GetAllReclamsA();
  }

  GetAllReclamsA()
  {
    this.recs.GetArchive(this.page,this.size,this.sortBy,this.sortOrder).subscribe((data:any) => {
      console.log(data)
      this.reclamation=data.content;
      this.pages=new Array(data['totalPages'])
    })
  }

ViewDetails (reclamation:Reclamation)
{ console.log(reclamation.time);
  this.temps=reclamation.time
  this._dialog.open(RecformulaireComponent,{

    data:{
      title:"Details",
      reclamation:reclamation,
      view:true
      },
  }
);

}
FindObj()
{
  if (!this.search) {
    this.GetAllReclamsA();
  } else {
  this.recs.FindObjet(this.search).subscribe({
    next : value => {
      this.reclamation = value; },
    error: (err) => {
      console.error('Erreur', err);
    }
  });
}
}
sort(field:string){
  this.sortBy=field
  this.sortOrder=="desc" ? this.sortOrder="asc" : this.sortOrder="desc"
  this.GetAllReclamsA()
}

}



