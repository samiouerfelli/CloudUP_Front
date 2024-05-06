import { Component } from '@angular/core';
import {RegistrationRequest} from '../../../services/models/registration-request';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../services/token/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent   {

  hide = true;

  registerRequest: RegistrationRequest = {email: '', motDePasse: '', nom: '' , phoneNumber: '' , prenom: '' , roles: 'Student'};
  errorMsg: Array<string> = [];
  constructor(private authService: AuthentificationService,
              private router: Router,
              private tokenService: TokenService
  ) { }


  // tslint:disable-next-line:typedef
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    })
      .subscribe({
        next: () => {
          this.router.navigate(['/pages/activate-account']);
        },
        error: (err) => {
          this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
