import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from '../../models/MyModels/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) {
  }

  public getReservation(): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>(`${this.baseUrl}/retrieveAllReservation`);
  }

  public updateReservationStatus(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.baseUrl}/updateReservation`, reservation);
  }

  public addReservation(reservation: any, etudiantID: number, profID: number, coursID: number): Observable<string> {
    let params = new HttpParams();
    params = params.append('etudiantID', etudiantID.toString());
    params = params.append('profID', profID.toString());
    params = params.append('coursID', coursID.toString());

    return this.http.post<string>(`${this.baseUrl}/addReservation`, reservation, { params });
  }
}
