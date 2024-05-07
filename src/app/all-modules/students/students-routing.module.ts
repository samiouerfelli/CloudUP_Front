import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { BookingComponent } from './booking/booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChatComponent } from './chat/chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MapGridComponent } from './map-grid/map-grid.component';
import { MapListComponent } from './map-list/map-list.component';
import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SearchComponent } from './search/search.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent,
    children: [
      { path: 'map-grid', component: MapGridComponent },
      { path: 'map-list', component: MapListComponent },
      { path: 'search', component: SearchComponent },
      { path: 'professor-profile', component: ProfessorProfileComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'booking-success', component: BookingSuccessComponent },
      { path: 'student-dashboard', component: StudentDashboardComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'profile-settings', component: ProfileSettingsComponent },
      { path: 'change-password', component: ChangePasswordComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
