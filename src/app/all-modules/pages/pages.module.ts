import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { VoiceCallComponent } from './voice-call/voice-call.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComponentsComponent } from './components/components.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEventComponent } from'./add-event/add-event.component';
import { CalendarAffComponent } from './calendar-aff/calendar-aff.component';
import { UpdateEventPopupComponent } from './update-event-popup/update-event-popup.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
// import {CodeInputModule} from 'angular-code-input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    PagesComponent,
    VoiceCallComponent,
    VideoCallComponent,
    CalendarComponent,
    ComponentsComponent,
    InvoicesComponent,
    InvoiceViewComponent,
    BlankPageComponent,
    LoginComponent,
    AddEventComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    ActivateAccountComponent,
    CalendarAffComponent,
    UpdateEventPopupComponent

],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatDialogModule,
        NgbModule,
        // CodeInputModule
    ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
