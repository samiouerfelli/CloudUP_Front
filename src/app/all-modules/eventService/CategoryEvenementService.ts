import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieEvenement } from '../eventService/CategoryEvenement';

@Injectable({
  providedIn: 'root'
})
export class CategorieEvenementService {

   baseUrl = 'http://backend-service:8087/api/v1/auth/categories'; // Replace with your actual base URL

  constructor(private http: HttpClient) { }

  getAllCategoriesEvenement(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  getCategorieEvenementById(id: number): Observable<CategorieEvenement> {
    return this.http.get<CategorieEvenement>(`${this.baseUrl}/${id}`);
  }

  addCategorieEvenement(categorieEvenement: CategorieEvenement): Observable<CategorieEvenement> {
    return this.http.post<CategorieEvenement>(`${this.baseUrl}/add`, categorieEvenement);
  }

  updateCategorieEvenement(categorieEvenement: CategorieEvenement): Observable<CategorieEvenement> {
    return this.http.put<CategorieEvenement>(`${this.baseUrl}/update/${categorieEvenement.id}`, categorieEvenement);
  }

  deleteCategorieEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
