import {Component, Input, OnInit} from '@angular/core';
import {AuthentificationRequest} from '../../../services/models/authentification-request';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../services/token/token.service';
import {User} from '../../../services/models/user';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthentificationRequest = {email: '', motDePasse: ''};
  errorMsg: Array<string> = [];
  isExp: boolean | undefined;
  private user!: User;
  constructor(private authService: AuthentificationService,
              private router: Router,
              private tokenService: TokenService,
              private loginService: LoginService
  ) { }
  // tslint:disable-next-line:typedef
  login() {
    this.errorMsg = [];
    this.authService.authenticate({body: this.authRequest}).subscribe({
      next: (res) => {
       this.tokenService.token = res ;
       this.router.navigate(['Home']);
       this.authService.getUser().subscribe({
          next: value => {
            this.user = value;
            const id = this.user.idUser as number ;
            this.authService.findUserById({idUser: id}).subscribe({
              next: (data) =>
              {
                if (this.user.nom != null && this.user.prenom != null) {
                  localStorage.setItem('nom', this.user.nom);
                  localStorage.setItem('prenom', this.user.prenom);
                  window.location.reload();
                }
              }
            });
          },
          // tslint:disable-next-line:typedef
          error(err){
            console.log(err);
          }
        });

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
