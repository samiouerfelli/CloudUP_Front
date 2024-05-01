import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/services/authentification.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})

export class ActivateAccountComponent {

  constructor(
    private router: Router,
    private authService: AuthentificationService
  ) {}
  message = '';
  isOk = true;
  submitted = false;

  // tslint:disable-next-line:typedef
  private confirmAccount(token: any) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOk = false;
      }
    });
  }


  // tslint:disable-next-line:typedef
  onCodeCompleted(token: any) {
    this.confirmAccount(token);
  }


  // tslint:disable-next-line:typedef
  redirectToLogin() {
    this.router.navigate(['/pages/login']);

  }
}
