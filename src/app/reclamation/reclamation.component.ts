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
  sortBy:string="id";
  sortOrder:string="desc";
  pages!:Array<number>
  temps:any;
  canEdit: boolean = true;
  data: any;

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
  SetPage(i:number)
  {
    this.page=i;
    this.GetAllReclams();
  }

  GetAllReclams()
  {
    this.recs.getRs(this.page,this.size,this.sortBy,this.sortOrder).subscribe((data:any) => {
      console.log(data)
      this.reclamation=data.content;
      this.pages=new Array(data['totalPages'])
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

ViewDetails (reclamation:Reclamation)
{ console.log(reclamation.time);
  this.temps=reclamation.time
  this._dialog.open(RecformulaireComponent,{

    data:{
      title:"Details",
      reclamation:reclamation,
      view:true
      },
  }).afterClosed().subscribe(
    result=> {this.snackBar.open(result,'',{duration: 1000});
    this.GetAllReclams();
    }
  )


}
FindObj()
{
  if (!this.search) {
    this.GetAllReclams();
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
SortData()
{
  this.recs.GetSort().subscribe((result)=>
  {
    this.reclamation=result;
    console.log(this.data)
  },
  (error)=>{
    console.error("erreur")
  })
}
SortDataAsc()
{
  this.recs.GetSortAsc().subscribe((result)=>
  {
    this.reclamation=result;
    console.log(this.data)
  },
  (error)=>{
    console.error("erreur")
  })

}

sort(field:string){
  this.sortBy=field
  this.sortOrder=="desc" ? this.sortOrder="asc" : this.sortOrder="desc"
  this.GetAllReclams()
}
getuser()
{
  const userrole = JSON.parse(localStorage.getItem('user')!).authorities[0].authority
  return userrole
}


}
