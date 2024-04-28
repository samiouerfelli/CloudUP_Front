import { WebSocketService } from './all-modules/web-socket-service.service';
import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router, Event, ActivatedRoute} from '@angular/router';
import {MyHttpService} from './my-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  componentToShow = 'home';
  title = 'university';
  url!: string;
  url1!: string;
  activeRoute!: string;
  active2Route!: string;
  hideFooter: boolean = false;
  userId:string="UNKNOWN"
   
    

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: MyHttpService,
              private webSocketService:WebSocketService) {
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
  initUser() {
      
    const userId = window.prompt("login");
    this.userId=userId!
    localStorage.setItem('userId',userId!)
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
}
