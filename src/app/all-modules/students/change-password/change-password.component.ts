import { Component, OnInit } from '@angular/core';
import {UpdatePasswordRequest} from '../../../services/models/update-password-request';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {Router} from '@angular/router';
import {LoginService} from '../../pages/login/login.service';
import {UserUpdatePwdRequest} from '../../../services/models/user-update-pwd-request';
import {CombinedPasswordUpdateDto} from '../../../services/models/combined-password-update-dto';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  updatePasswordRequest: UpdatePasswordRequest = {motDePasse: ''};
  motDePasseConfirm = '';
  userUpdatePassword: UserUpdatePwdRequest = {
    nom: '',
    prenom: '',
    phoneNumber: '',
    email: '',
  };
  constructor(private authService: AuthentificationService,
              private router: Router,
              private dataService: LoginService) {
  }

  // tslint:disable-next-line:typedef
  errorMsg: string | undefined;
  // tslint:disable-next-line:typedef
  changePassword() {
    const value = this.updatePasswordRequest.motDePasse as string;
    if (value === this.motDePasseConfirm) {
      this.dataService.PhoneNumber.subscribe({
        next: phoneData => {
          this.authService.getUserbyPhoneNumber({phone: phoneData}).subscribe({
            next: val => {
              this.userUpdatePassword.nom = val.nom;
              this.userUpdatePassword.prenom = val.prenom;
              this.userUpdatePassword.email = val.email;
              this.userUpdatePassword.phoneNumber = val.phoneNumber;
              const combinedRequest: CombinedPasswordUpdateDto = {
                updatePasswordRequest: this.updatePasswordRequest,
                userUpdatePasswordRequest: this.userUpdatePassword
              };
              this.authService.updatePassword( {body: combinedRequest}).subscribe({
                next: () => {
                  this.router.navigate(['/pages/login']);
                },
                error: () => {
                  console.log('error to update password');
                }
              });
            }
          });
        }
      });
    }
    else {
      this.errorMsg = 'password does not match';
    }
  }
}
