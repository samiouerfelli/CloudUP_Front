import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {LoginService} from '../login/login.service';
import {UserUpdatePwdRequest} from '../../../services/models/user-update-pwd-request';
declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    Phone = '';
    userUpdatePassword: UserUpdatePwdRequest = {
      nom: '',
      prenom: '',
      phoneNumber: '',
      email: '',
    };

  constructor( private authService: AuthentificationService,
               private dataService: LoginService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.getUserbyPhoneNumber({phone: this.Phone}).subscribe({
      next: val => {
        this.userUpdatePassword.nom = val.nom;
        this.userUpdatePassword.prenom = val.prenom;
        this.userUpdatePassword.email = val.email;
        this.userUpdatePassword.phoneNumber = val.phoneNumber;
        this.authService.sendUpdatePasswordSms({body: this.userUpdatePassword}).subscribe({
          next: () => {
            this.openModal();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
  });
  }
  openModal(): void {
    $('#Forget-password').modal('show');
  }
  // tslint:disable-next-line:typedef
  GetPhoneNumber() {
    const data = this.Phone;
    this.dataService.GetPhoneNumber(data);
  }
}
