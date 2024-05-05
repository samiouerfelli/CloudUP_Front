import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  addCommand(command: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/commands`, command);
  }
}
