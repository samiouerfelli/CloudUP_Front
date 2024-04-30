import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComponentsComponent } from './components/components.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterComponent } from './register/register.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { VoiceCallComponent } from './voice-call/voice-call.component';
import {ActivateAccountComponent} from './activate-account/activate-account.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      {path: 'activate-account', component: ActivateAccountComponent },
      { path: 'voice-call', component: VoiceCallComponent },
      { path: 'video-call', component: VideoCallComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'invoice-view', component: InvoiceViewComponent },
      { path: 'blank-page', component: BlankPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'term-condition', component: TermConditionComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
