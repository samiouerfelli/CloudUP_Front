import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { Product } from 'src/app/FrontOffice/model/Product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product;
  currentDate: Date = new Date();
  commandeProductList : any = [];
  commandeProduct : any = {
    product : null,
    quantity : 0
  };

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getSelectedProduct();
  }

  getSelectedProduct(){
    this.product = this.productService.getSelectedProduct();
  }
  addToCart(product : Product){
    this.commandeProduct.product = product;
    this.commandeProductList = this.productService.getCommandeProducts();
    if(!this.commandeProductList)
      this.commandeProductList = [];
    if(this.commandeProductList.filter(command => command.product.id == product.id).length == 0){
      this.commandeProductList.push(this.commandeProduct);
    this.productService.setCommandeProducts(this.commandeProductList);
    }
    
}

    


}
