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

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getSelectedProduct();
  }

  getSelectedProduct(){
    this.product = this.productService.getSelectedProduct();
  }

}
