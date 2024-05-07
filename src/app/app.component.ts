import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router, Event, ActivatedRoute} from '@angular/router';
import {MyHttpService} from './my-http.service';
import {AuthentificationService} from './services/services/authentification.service';
import {OtpValidationRequest} from './services/models/otp-validation-request';
import {LoginService} from './all-modules/pages/login/login.service';
import {UpdateRequest} from './services/models/update-request';
import {UserUpdatePwdRequest} from './services/models/user-update-pwd-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  componentToShow = 'home';
  title = 'university';
  url!: string;
  url1!: string;
  activeRoute!: string;
  active2Route!: string;
  hideFooter = false;
  message = '';
  isOk = true;
  submitted = false;
  submittedU = false;
  isOkU = true;

  submittedF = false;
  isOkF = true;
  userUpdatePassword: UserUpdatePwdRequest = {
    nom: '',
    prenom: '',
    phoneNumber: '',
    email: '',
  };
  errorMsg: Array<string> = [];
  updateUser: UpdateRequest = {
    nom: '',
    prenom: '',
    phoneNumber: '',
    gender: 'Female',
    dateOfBirth: '',
    aboutMe: '',
    city: '',
    country: '',
    codePostal: 0,
    college: 'ESPRIT',
    degree: 'CLASS_1ERE',
    option: 'DS',
    membership: ''
  };
  validationRequest: OtpValidationRequest = {username: '', otpNumber: ''};
  @ViewChild('closeActiveAccount') closeActiveAccount: any;
  @ViewChild('closeUpdateAccount') closeUpdateAccount: any;
  @ViewChild('closeUpdatePassword') closeUpdatePassword: any;

  data!: UpdateRequest;
  selectedUserCover!: Blob;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthentificationService,
              private http: MyHttpService,
              private dataService: LoginService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // tslint:disable-next-line:no-shadowed-variable
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
        const body = document.getElementsByTagName('body')[0];
        // tslint:disable-next-line:max-line-length
        if (this.active2Route === 'chat-professor' || this.active2Route === 'map-grid' || this.active2Route === 'map-list' || this.active2Route === 'chat' || this.active2Route === 'voice-call' || this.active2Route === 'video-call') {
          this.hideFooter = true;
        } else {
          this.hideFooter = false;
        }
        // tslint:disable-next-line:max-line-length
        if (this.active2Route === 'professor-register' || this.active2Route === 'login' || this.active2Route === 'register' || this.active2Route === 'forgot-password') {
          body.classList.add('account-page');
        } else {
          body.classList.remove('account-page');
        }
        if (this.active2Route === 'chat' || this.active2Route === 'chat-professor') {
          body.classList.add('chat-page');
        } else {
          body.classList.remove('chat-page');
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          if (params.code !== undefined) {
            this.http.getToken(params.code).subscribe(result => {
              if (result === true) {
                this.componentToShow = 'login';
              } else {
                this.componentToShow = 'home';
              }
            });
          }
        }
      );
    this.dataService.image.subscribe(updatedImage => {
      if (updatedImage) {
        this.selectedUserCover = updatedImage;
        console.log(this.selectedUserCover);

      }
    });
    /* this.dataService.image.subscribe({
       next: (image: File | null) => {
         if (image) {
           const reader = new FileReader();
           reader.onload = (e: ProgressEvent<FileReader>) => {
             // tslint:disable-next-line:max-line-length
             // @ts-ignore
             this.selectedUserCover = e.target.result as string;
           };
         }
       }
     });
     */
  }


  // tslint:disable-next-line:typedef
  redirectToLogin() {
    this.closeActiveAccount.nativeElement.click();
    this.router.navigate(['/pages/login']);
  }

  // tslint:disable-next-line:typedef
  onCodeCompleted(token: string) {
    this.confirmAccount(token);


  }

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
  redirectToHome() {
    this.closeUpdateAccount.nativeElement.click();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  onCodeCompletedU(token: string) {
    this.ConfirmUpdate(token);
  }

  // tslint:disable-next-line:typedef
  private ConfirmUpdate(token: string) {
    // @ts-ignore
    this.authService.getUser().subscribe({
      next: res => {
        this.validationRequest.username = res.username;
        this.validationRequest.otpNumber = token as string;
        this.validate(this.validationRequest);
      }
    });
  }

  // tslint:disable-next-line:typedef
  private validate(validationRequest: OtpValidationRequest) {
    this.authService.validateOtp({body: this.validationRequest}).subscribe({
      next: () => {
        console.log(this.validationRequest);
        this.message = 'Your Account has been successfully updated.\nNow you can proceed your navigate';
        this.submittedU = true;
        this.update();
      },
      error: () => {
        console.log();
        this.isOkU = false;
        this.submittedU = true;
        this.message = 'the code is incorrect or invalid';
      }
    });
  }

  // tslint:disable-next-line:typedef
  private update() {
    this.dataService.data.subscribe({
      next: updatedData => {
        if (updatedData) {
          this.authService.updateUser({body: updatedData}).subscribe({
            next: () => {
              if (this.selectedUserCover) {
                this.authService.uploadUserPhoto({
                  body: {file: this.selectedUserCover},
                }).subscribe({
                  error: (err) => {
                    console.error(err);
                  }
                });
              }
            },
            error: (err) => {
              console.error(err);
            }
          });
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  redirectToChangePassword() {
    this.closeUpdatePassword.nativeElement.click();
    this.router.navigate(['/students/change-password']);
  }

  // tslint:disable-next-line:typedef
  onCodeCompletedF(token: string) {
    this.ConfirmPassword(token);
  }

  // tslint:disable-next-line:typedef
  private ConfirmPassword(token: string) {
        this.dataService.PhoneNumber.subscribe({
          next: phoneData => {
            this.authService.getUserbyPhoneNumber({phone: phoneData}).subscribe({
              next: user => {
                this.validationRequest.username = user.username;
                this.validationRequest.otpNumber = token as string;
                this.validateF(this.validationRequest);
              },
              error: (err) => {
               console.log('error get phone number') ;
              }
          });
        }
    });
  }

// tslint:disable-next-line:typedef
  private validateF(validationRequest: OtpValidationRequest) {
    this.authService.validateOtp({body: this.validationRequest}).subscribe({
      next: () => {
        console.log(this.validationRequest);
        this.message = 'Your Account has been successfully updated.\nNow you can proceed your navigate';
        this.submittedF = true;
        },
      error: () => {
        console.log();
        this.isOkF = false;
        this.submittedF = true;
        this.message = 'the code is incorrect or invalid';
      }
    });
  }
}
