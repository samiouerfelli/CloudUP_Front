import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }//il httpclient nestaamlouh bech naamlo il post w get requests
  apiurl = 'http://backend-service:8087/api/v1/auth';

  GetAll(): Observable<any> {
    return this.http.get(`${this.apiurl}/partenaires`);
  }

  
  Deletepart(id: any): Observable<any> {
    return this.http.delete(`${this.apiurl}/deletePartenaires/${id}`);
  }

  
  ajoutPart(partenaires: any): Observable<any> {
    return this.http.post(`${this.apiurl}/addPartenaires`, partenaires);
  }

  addPartenaire(file: File, nom: string, descpart: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('nom', nom);
    formData.append('descpart', descpart);
    
    return this.http.post(this.apiurl + '/addP', formData, {
      responseType: 'text' // Set response type to text
    }).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return of(error.error);
  }

  updatePart(partenaires: any, id: number): Observable<any> {
    return this.http.put(`${this.apiurl}/updatePartenaires/${id}`, partenaires);
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('PUT', `${this.apiurl}/upload/`, formData,);

    return this.http.request(req);
  }

  //getFiles(): Observable<any> {
   // return this.http.get(`${this.apiurl}/files`);
  //}
  showfile( id: number): Observable<any> {

  return this.http.get(`${this.apiurl}/show/`+id);
  }
  
}
