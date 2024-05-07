import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/FrontOffice/Service/product.service';
import { Product } from 'src/app/FrontOffice/model/Product';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  products: Product[] = [];
  minValue = 0;
  maxValue = 0;
  keyWord = "";
  commandeProduct : any = {
    product : null,
    quantity : 0
  };
  commandeProductList : any = [];
  constructor(
    private produitService: ProductService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.produitService.getAllProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.log('Erreur lors de la récupération des produits :', error);
      }
    );
  }
  viewDetails(product : Product){
    this.produitService.setSelectedProduct(product);
    this.route.navigate(["/products/details"]);

  }
  edit(product : Product){
    this.produitService.setSelectedProduct(product);
    this.route.navigate(["/products/edit"]);

  }
  range(value: number): number[] {
    return Array.from({length: value}, (v, k) => k);
  }
  
    addToCart(product : Product){
      this.commandeProduct.product = product;
      this.commandeProductList = this.produitService.getCommandeProducts();
      if(!this.commandeProductList)
        this.commandeProductList = [];
      if(this.commandeProductList.filter(command => command.product.id == product.id).length == 0){
        this.commandeProductList.push(this.commandeProduct);
      this.produitService.setCommandeProducts(this.commandeProductList);
      }
      
  }
  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value ) + '';
    }

    return `${value}`;
  }
  deleteProduct(product:Product){
    this.produitService.deleteProduct(product.id).subscribe(
      product => {
        console.log(product)
      },
      error => {
        console.log('Erreur lors de la récupération des produits :', error);
      }
    );
  }
  getFiltredProductByPrice(){
    if(!(this.minValue == 0 && this.maxValue == 0)){
      this.produitService.getFiltredProductByPrice(this.minValue,this.maxValue).subscribe(
        products => {
          if(!(this.keyWord == "" || this.keyWord == null)){
            this.products = products.filter(product => product.name.includes(this.keyWord));

          }
          else
          this.products = products;
        },
        error => {
          console.log('Erreur lors de la récupération des produits :', error);
        }
      );
    }
    else{
      this.produitService.getAllProducts().subscribe(
        products => {
          this.products = products;
        },
        error => {
          console.log('Erreur lors de la récupération des produits :', error);
        }
      );
    }
  }
  getByKeyWord(){
    if(!(this.keyWord == "")){
      this.produitService.getByKeyWord(this.keyWord).subscribe(
        products => {
          if(!(this.minValue == 0 && this.maxValue == 0)){
            this.products = products.filter(product => product.price >= this.minValue && product.price <= this.maxValue);
          }
          else
          this.products = products;
        },
        error => {
          console.log('Erreur lors de la récupération des produits :', error);
        }
      );
      
    }

    else{
      this.produitService.getAllProducts().subscribe(
        products => {
          this.products = products;
        },
        error => {
          console.log('Erreur lors de la récupération des produits :', error);
        }
      );
    }
  }
}
