import { WebSocketService } from './all-modules/web-socket-service.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationStart, Router, Event, ActivatedRoute} from '@angular/router';
import {MyHttpService} from './my-http.service';
import { TokenService } from './services/token/token.service';
import {saveSlot} from "./services/fn/slots-controller/save-slot";
import {OtpValidationRequest} from './services/models/otp-validation-request';
import {LoginService} from './all-modules/pages/login/login.service';
import {UpdateRequest} from './services/models/update-request';
import {UserUpdatePwdRequest} from './services/models/user-update-pwd-request';
import {SlotsControllerService} from "./services/services/slots-controller.service";
import {AuthentificationService} from "./services/services/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedDay!: string ;
  timeSlots!: any[];
  @ViewChild('closebutton') closebutton: any;

  componentToShow = 'home';
  title = 'university';
  url!: string;
  url1!: string;
  activeRoute!: string;
  active2Route!: string;
  hideFooter: boolean = false;
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
              private service: SlotsControllerService,
              private webSocketService:WebSocketService,
              private authservice:TokenService,
              private authService: AuthentificationService,
              private http: MyHttpService,
              private dataService: LoginService) {
              //  this.initUser()
    webSocketService._connect()
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
  formatDateTime(date: string, time: string, hoursToAdd = 0): string {
    const timeParts = time.split(':');
    const dateObj = new Date(date);
    // tslint:disable-next-line:radix
    dateObj.setHours(parseInt(timeParts[0]) + hoursToAdd, parseInt(timeParts[1]));

    // Convert to ISO string and remove seconds and milliseconds
    return dateObj.toISOString().slice(0, 16) + ':00';
  }
  selectDay(day: string): void {
    this.selectedDay = day;
    // Fetch the time slots for the selected day from your service
    this.service.getSlotsOfConnectedUserOnly({day}).subscribe(
      slots => {
        this.timeSlots = slots;
      },
      error => {
        console.error('Error fetching time slots:', error);
        this.timeSlots = [];
      }
    );
  }


  saveSlot(formData: any) {
    const startDateTime = this.formatDateTime(formData.date, formData.time);
    const endDateTime = this.formatDateTime(formData.date, formData.endTime);
    const date = new Date(formData.date);


    const day = date.toLocaleString('en-US', {weekday: 'long'});
    let newTimeSlot: { dayOfWeek: string; startTime: string; endTime: string };
    newTimeSlot = {
      startTime: startDateTime,
      endTime: endDateTime,
      dayOfWeek: day.toUpperCase()
    };
    const params = {
      body: newTimeSlot
    };

    this.service.saveSlot(params).subscribe({
      error: err => {
        console.log('Error saving time slot:', err);
        alert('There was an error saving the time slot.');
      },
      next: response => {
        this.selectDay(params.body.dayOfWeek);
        this.service.getSlotsOfConnectedUserOnly({day: params.body.dayOfWeek});
        this.closebutton.nativeElement.click();
        this.ngOnInit();
        console.log('TimeSlot saved:', response);
        alert('TimeSlot ajouté avec succès');
      }
    });


  }

}
