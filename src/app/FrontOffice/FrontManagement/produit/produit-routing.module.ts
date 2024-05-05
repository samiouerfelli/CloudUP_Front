import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddBillingComponent } from './add-billing/add-billing.component';

const routes: Routes = [
  {path:"list",component:ListProduitComponent},
  {path:"edit",component:EditProduitComponent},
  {path:"add",component:AddBillingComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
