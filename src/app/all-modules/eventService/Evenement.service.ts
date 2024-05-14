import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  HttpHeaders } from '@angular/common/http';
import {Event} from 'src/app/all-modules/eventService/event'
import { catchError, map } from 'rxjs/operators'; // Import map operator if needed

const AUTH_API = 'http://192.168.139.109:32674/api/v1/auth/evenement/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient,) { }
  apiurl = 'http://192.168.139.109:32674/api/v1/auth/evenement/';

  GetAll(): Observable<any> {
    return this.http.get(`${this.apiurl}all`);
  }
  Deletepart(id: any): Observable<any> {
    return this.http.delete(`${this.apiurl}delete/${id}`);
  }
  addColla(file: File, nomcol: string, desccol: string, datecol: string, dateFin: string,placecol: string, maxparticipant: number, partenaires_id_part: any, nbrres: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('nom', nomcol);
    formData.append('description', desccol);
    formData.append('datedebut', datecol);
    formData.append('datefin', dateFin);
    formData.append('lieu', placecol);
    formData.append('maxparticipant', maxparticipant.toString());
    formData.append('organisateur_id_user', partenaires_id_part.toString());
    formData.append('categorie_id', nbrres.toString()); // Corrected field name here
    return this.http.post(this.apiurl + 'add2', formData, {
      responseType: 'text'
    }).pipe(
      catchError(this.handleError)
    );
  }


  ajoutPart(lieu: string, nom: string, description: string, dateDebut: string, dateFin: string,categorie:any): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      lieu,
      nom,
      description,
      dateDebut,
      dateFin,
      categorie
    }, httpOptions);
  }
  getEvenementById(id: number): Observable<any> {
    return this.http.get(`${this.apiurl}${id}`);
  }
  updateEvent(id: number,Event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiurl}update/${id}`,Event)
  }
  addParticipant(eventId: number, userId: number): Observable<any> {
    return this.http.post(`${AUTH_API}join/${eventId}/${userId}`, {}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getIDFromToken(token: string): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<number>('http://192.168.139.109:32674/api/v1/auth/getTokenAndReturnID?token=' + token, { headers });
  }

  // Remove Participant Method
  removeParticipant(eventId: number, userId: number): Observable<any> {
    return this.http.delete(`${AUTH_API}leave/${eventId}/${userId}`, httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('Error removing participant:', error);
          return throwError('Something bad happened; please try again later.');
        })
      );
  }

  private handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      if (error.status === 404) {
        return throwError(new Error('Event or User not found'));
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(new Error('Something bad happened; please try again later.'));
  }
  isParticipating(eventId: number, userId: number): Observable<boolean> {
    return this.http.get<boolean>(`${AUTH_API}isParticipating/${eventId}/${userId}`);
  }
  getParticipantCount(eventId: number): Observable<number> {
    return this.http.get<number>(`${AUTH_API}participants/${eventId}/count`);
  }

  getBestEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${AUTH_API}Top3`);
  }
  reportEvent(eventId: number): Observable<Event> {
    return this.http.post<Event>(`${AUTH_API}report/${eventId}`, {})
      .pipe(
        catchError(this.handleError)
      );
  }


}
