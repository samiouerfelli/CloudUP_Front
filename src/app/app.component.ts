import {Component, OnInit, ViewChild} from '@angular/core';
import { WebSocketService } from './all-modules/web-socket-service.service';
import {NavigationStart, Router, Event, ActivatedRoute} from '@angular/router';
import {MyHttpService} from './my-http.service';
import {AuthentificationService, SlotsControllerService} from './services/services';
import { TokenService } from './services/token/token.service';
import {saveSlot} from "./services/fn/slots-controller/save-slot";

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



  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: MyHttpService,
              private service: SlotsControllerService,
              private webSocketService:WebSocketService,
              private authservice:TokenService) {
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
        if ( this.active2Route === 'chat-professor' || this.active2Route === 'map-grid' || this.active2Route === 'map-list' || this.active2Route === 'chat' || this.active2Route === 'voice-call' || this.active2Route === 'video-call') {
          this.hideFooter = true;
        } else {
          this.hideFooter = false;
        }
        // tslint:disable-next-line:max-line-length
        if ( this.active2Route === 'professor-register' || this.active2Route === 'login' || this.active2Route === 'register' || this.active2Route === 'forgot-password') {
          body.classList.add('account-page');
        } else {
          body.classList.remove('account-page');
        }
        if ( this.active2Route === 'chat' || this.active2Route === 'chat-professor') {
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
