import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MapListComponent } from './map-list/map-list.component';
import { SearchComponent } from './search/search.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { BookingComponent } from './booking/booking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgSelect2Module } from 'ng-select2';
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgxPayPalModule} from "ngx-paypal";


@NgModule({
  declarations: [
    StudentsComponent,
    MapGridComponent,
    MapListComponent,
    SearchComponent,
    ProfessorProfileComponent,
    BookingComponent,
    CheckoutComponent,
    BookingSuccessComponent,
    StudentDashboardComponent,
    FavouritesComponent,
    ChatComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent
  ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        NgSelect2Module,
        CrystalLightboxModule,
        Daterangepicker,
        FormsModule,
        NgxPayPalModule,
        ReactiveFormsModule
    ]
})
export class StudentsModule { }
