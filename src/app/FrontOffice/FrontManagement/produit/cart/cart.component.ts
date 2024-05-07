import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'protractor';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { Product } from 'src/app/FrontOffice/model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  commadeProductList : any = [];
  total = 0;
  constructor(
    private productService : ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getCommandeList();
  }

  getCommandeList(){
    this.commadeProductList = this.productService.getCommandeProducts();
    this.commadeProductList.forEach(command => {
      this.total = this.total + (command.product.price * command.quantity)
    });
  }
  verifPositif(commandeProduct : any){
    if(commandeProduct.quantity < 0){
      commandeProduct.quantity = 0;
    }
    else{
      this.total = this.total - commandeProduct.product.price 
    }
    
  }
  deleteProduct(commandeProduct : any){
   this.commadeProductList =  this.commadeProductList.filter(Commande => Commande.product.id !== commandeProduct.product.id);
   console.log(this.commadeProductList)
   this.productService.setCommandeProducts(this.commadeProductList);

  }
  saveState(){
    this.productService.setCommandeProducts(this.commadeProductList);
  }
  viewDetails(product : Product){
    this.productService.setSelectedProduct(product);
    this.router.navigate([
      "/products/details"
    ])
  }
}
