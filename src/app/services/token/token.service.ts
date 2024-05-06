import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public isLogedIn!: boolean;

  set token(res: any){
    localStorage.setItem('token', res.token);
    localStorage.setItem('isLogedIn', 'true');
    localStorage.setItem('user', JSON.stringify(res.user));
  }
  // tslint:disable-next-line:typedef
  get gettoken(){
    return localStorage.getItem('token') as string;
  }
}
