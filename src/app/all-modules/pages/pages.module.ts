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
import {FormsModule} from '@angular/forms';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import {CodeInputModule} from 'angular-code-input';


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
    RegisterComponent,
    ForgotPasswordComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    ActivateAccountComponent,
],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        CodeInputModule
    ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
