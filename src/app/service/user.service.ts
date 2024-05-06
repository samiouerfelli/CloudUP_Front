import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getIDFromToken(token: string): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<number>('http://localhost:8080/api/v1/auth/getTokenAndReturnID?token=' + token, { headers });
  }
  getRole(idUser: number):Observable<string> {
    return this.http.get<string>(`Http://localhost:8080/api/v1/auth/getRole/${idUser}`);
  }
}
