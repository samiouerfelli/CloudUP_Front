import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from './Token';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  token = '';

  constructor(private http: HttpClient) { }

  get(url: string): any {
    return this.http.get('http://192.168.139.109:32674' + url);
  }

  getPrivate(url: string): any {
    return this.http.get('http://192.168.139.109:32674' + url, {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})});
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>('http://192.168.139.109:32674/auth/callback?code=' + code, {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status === 200 && response.body !== null) {
          this.token = response.body.token;
          return true;
        } else {
          return false;
        }
      }));
  }
}
