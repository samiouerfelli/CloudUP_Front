import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaborationReservationService {
  constructor(private http: HttpClient) { }
  apiurl = 'http://192.168.139.109:32674/api/v1/auth';



  getUserList(): Observable<any> {
    return this.http.get(`${this.apiurl}/findAllusers`);
  }
  GetAllColsres(): Observable<any> {
    return this.http.get(`${this.apiurl}/retriveCollaborationres`);
  }
  addReservationCollaboration(userId: number, collaborationId: number): Observable<any> {
    return this.http.post<any>(`${this.apiurl}/addReservationCollaboration/${userId}/${collaborationId}`, {});
  }

  getAllReservationCollaborations(): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/collabreservation`);
  }

  getReservationCollaborationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/getrescolbyid/${id}`);
  }

  deleteReservationCollaboration(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}/delcolresbyid/${id}`);
  }
///reservationsBYID/{idUser}
  getReservationCollaborationByuserId(idUser: number): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/reservationsBYID/${idUser}`);
  }
  getIDFromToken(token: string): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<number>('http://192.168.139.109:32674/api/v1/auth/getTokenAndReturnID?token=' + token, { headers });
  }

}
