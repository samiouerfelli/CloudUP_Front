import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieEvenement } from '../service/CategoryEvenement';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService{
  private baseUrl = 'http://localhost:8087/api/v1/auth/profile'; // Change this URL to match your backend API URL

  constructor(private http: HttpClient) { }

  addUserProfile(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
  addUserProfileEducation(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
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
}


