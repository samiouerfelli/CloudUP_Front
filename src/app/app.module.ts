import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RecformulaireComponent } from './recformulaire/recformulaire.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDeleteComponent } from './confirmation-delete/confirmation-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './chat/chat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AngularEnumsListModule} from 'angular-enum-list';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import {HttpTokenInterceptor} from './Interceptor/http-token.interceptor';
import {MatSortModule} from '@angular/material/sort';
import { ReclamarchivesComponent } from './reclamarchives/reclamarchives.component';
import {NgxPayPalModule} from 'ngx-paypal';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { CollaborationadminComponent } from './collaborationadmin/collaborationadmin.component';
import { PartenairesadminComponent } from './partenairesadmin/partenairesadmin.component';
import { CollaborationdetailsComponent } from './collaborationdetails/collaborationdetails.component';
import { CollaborationreservationComponent } from './collaborationreservation/collaborationreservation.component';
import { CollaborationresssssComponent } from './collaborationresssss/collaborationresssss.component';
import {CodeInputModule} from "angular-code-input";
import {PagesModule} from "./all-modules/pages/pages.module";
import {UpdateEventPopupComponent} from "./all-modules/pages/update-event-popup/update-event-popup.component";
import {EventCategoryComponent} from "./all-modules/admin/event-category/event-category.component";
import {AddEventComponent} from "./all-modules/pages/add-event/add-event.component";
import {CalendarAffComponent} from "./all-modules/pages/calendar-aff/calendar-aff.component";

// tslint:disable-next-line:typedef
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReclamationComponent,
    RecformulaireComponent,
    ConfirmationDeleteComponent,
    ChatComponent,
    CollaborationComponent,
    CollaborationadminComponent,
    PartenairesadminComponent,
    CollaborationdetailsComponent ,
    ReclamarchivesComponent,
    CollaborationreservationComponent,
    CollaborationresssssComponent,
    UpdateEventPopupComponent,
    EventCategoryComponent,
    AddEventComponent,
    CalendarAffComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
    AngularEnumsListModule.forRoot(),
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter}
    }),
    MatSortModule,
    CodeInputModule,
    PagesModule,
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
