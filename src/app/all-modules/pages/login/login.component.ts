import {Component, Input, OnInit} from '@angular/core';
import {AuthentificationRequest} from '../../../services/models/authentification-request';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../services/token/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthentificationRequest = {email: '', motDePasse: ''};
  errorMsg: Array<string> = [];
  isExp: boolean | undefined;
  constructor(private authService: AuthentificationService,
              private router: Router,
              private tokenService: TokenService
  ) { }
  // tslint:disable-next-line:typedef
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
       this.tokenService.token = res.token as string;
       this.router.navigate(['books']);

      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.error);
        }
      }
    });
  }
}
