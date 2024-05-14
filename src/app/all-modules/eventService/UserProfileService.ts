import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CategorieEvenement } from '../eventService/CategoryEvenement';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService{
  private baseUrl = 'http://mysqldb:8087/api/v1/auth/profile'; // Change this URL to match your backend API URL
award:any;
  constructor(private http: HttpClient) { }

  addUserProfile(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
  addaward(award:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addaw/${award.userId}`,award );}
    addS(award:any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/addS/${award.userId}`,award );}
      addE(award:any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/addE/${award.userId}`,award );}

  addUserProfileEducation(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addE`, user);
  }
  addAward(award: any,id:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-award/1`, award);
  }
  updateProfile(id: number,Event: any): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}update/${id}`,Event)
  }
  deleteUserProfile(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }

  getUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
  getUserProfileAward(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getA/${userId}`);
  }
  getUserProfileSpeciality(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getS/${userId}`);
  }
  getUserProfileEducation(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getE/${userId}`);
  }
}


