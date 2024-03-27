import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecformulaireComponent } from '../recformulaire/recformulaire.component';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {
  constructor(private _dialog: MatDialog) {}

  openAddFormulaire() {
    this._dialog.open(RecformulaireComponent);
  }

}
