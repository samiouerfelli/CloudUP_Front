import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiurl;


  constructor(private http: HttpClient) { }

  getSelectedProduct(): Product{
    const product = localStorage.getItem('product');
    return product ? JSON.parse(product) : null;  }
  setSelectedProduct(product:Product){
    localStorage.setItem('product', JSON.stringify(product));
  }


  getCommandeProducts(): any[]{
    const products = localStorage.getItem('commande_products');
    return products ? JSON.parse(products) : null;  
  }

  setCommandeProducts(commandeProductsList:any[]){
    localStorage.setItem('commande_products', JSON.stringify(commandeProductsList));
  }


  addProduct(product: any): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  getFiltredProductByPrice(minPrice: number,maxPrice:Number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/by/minPice/${minPrice}/maxPrice/${maxPrice}`);
  }

  getByKeyWord(keyWord: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/by/keyWord/${keyWord}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/products/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products`, product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}
