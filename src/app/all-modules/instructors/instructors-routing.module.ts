import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { CartComponent } from './cart/cart.component';
import { ChatProfessorComponent } from './chat-professor/chat-professor.component';
import { CourseCheckoutComponent } from './course-checkout/course-checkout.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { InstructorsComponent } from './instructors.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { ProfessorAddBlogComponent } from './professor-add-blog/professor-add-blog.component';
import { ProfessorBlogComponent } from './professor-blog/professor-blog.component';
import { ProfessorChangePasswordComponent } from './professor-change-password/professor-change-password.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorPendingBlogComponent } from './professor-pending-blog/professor-pending-blog.component';
import { ProfessorProfileSettingsComponent } from './professor-profile-settings/professor-profile-settings.component';
import { ProfessorRegisterComponent } from './professor-register/professor-register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import {AddCoursComponent} from './add-cours/add-cours.component';
import {GetCoursComponent} from './get-cours/get-cours.component';
import {UpdateCoursComponent} from './update-cours/update-cours.component';
import {BookingComponent} from '../students/booking/booking.component';
import {MysessionComponent} from './mysession/mysession.component';

const routes: Routes = [
  { path: '', component: InstructorsComponent,
  children: [
    { path: 'professor-dashboard', component: ProfessorDashboardComponent },
    { path: 'course', component: CourseComponent },
    { path: 'sessions', component: SessionsComponent },
    {path: 'mysessions', component: MysessionComponent},
    { path: 'schedule-timings', component: ScheduleTimingsComponent },
    { path: 'my-students', component: MyStudentsComponent },
    { path: 'student-profile', component: StudentProfileComponent },
    { path: 'chat-professor', component: ChatProfessorComponent },
    { path: 'professor-profile-settings', component: ProfessorProfileSettingsComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'professor-register', component: ProfessorRegisterComponent },
    { path: 'professor-blog', component: ProfessorBlogComponent },
    { path: 'professor-add-blog', component: ProfessorAddBlogComponent },
    { path: 'social-media', component: SocialMediaComponent },
    { path: 'professor-change-password', component: ProfessorChangePasswordComponent },
    { path: 'add-billing', component: AddBillingComponent },
    { path: 'edit-billing', component: EditBillingComponent },
    { path: 'course-checkout', component: CourseCheckoutComponent },
    { path: 'edit-blog', component: EditBlogComponent },
    { path: 'professor-pending-blog', component: ProfessorPendingBlogComponent },
    { path: 'cart', component: CartComponent },
    { path: 'course-details', component: CourseDetailsComponent },
    {path: 'add-course', component: AddCoursComponent},
    {path: 'get-course', component: GetCoursComponent},
    {path: 'update-course/:idCours', component: UpdateCoursComponent},
    {path: 'students/booking/:professorId/:coursID', component: BookingComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
