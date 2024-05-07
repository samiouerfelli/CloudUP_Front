import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CourseCheckoutComponent } from './course-checkout/course-checkout.component';

const routes: Routes = [
  {path:"list",component:ListProduitComponent},
  {path:"edit",component:EditProduitComponent},
  {path:"add",component:AddBillingComponent},
  {path:"details",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:'checkout',component:CourseCheckoutComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
