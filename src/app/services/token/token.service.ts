import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public isLogedIn!: boolean;

  set token(token: string){
    localStorage.setItem('token', token);
    localStorage.setItem('isLogedIn', 'true');
  }
  // tslint:disable-next-line:typedef
  get gettoken(){
    return localStorage.getItem('token') as string;
  }
}
