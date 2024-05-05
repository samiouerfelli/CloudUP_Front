import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for making HTTP requests
import { FormsModule } from '@angular/forms';
import { AddBillingComponent } from './add-billing/add-billing.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    ListProduitComponent,
    AddProduitComponent,
    EditProduitComponent,
    AddBillingComponent

  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule
    
  ]
})
export class ProduitModule { }
