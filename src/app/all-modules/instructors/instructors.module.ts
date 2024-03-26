import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { CourseComponent } from './course/course.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ChatProfessorComponent } from './chat-professor/chat-professor.component';
import { ProfessorProfileSettingsComponent } from './professor-profile-settings/professor-profile-settings.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProfessorRegisterComponent } from './professor-register/professor-register.component';
import { ProfessorBlogComponent } from './professor-blog/professor-blog.component';
import { ProfessorAddBlogComponent } from './professor-add-blog/professor-add-blog.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProfessorChangePasswordComponent } from './professor-change-password/professor-change-password.component';
import { AddBillingComponent } from './add-billing/add-billing.component';
import { EditBillingComponent } from './edit-billing/edit-billing.component';
import { CourseCheckoutComponent } from './course-checkout/course-checkout.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ProfessorPendingBlogComponent } from './professor-pending-blog/professor-pending-blog.component';
import { CartComponent } from './cart/cart.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { GetCoursComponent } from './get-cours/get-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';


@NgModule({
  declarations: [
    InstructorsComponent,
    ProfessorDashboardComponent,
    CourseComponent,
    SessionsComponent,
    ScheduleTimingsComponent,
    MyStudentsComponent,
    StudentProfileComponent,
    ChatProfessorComponent,
    ProfessorProfileSettingsComponent,
    ReviewsComponent,
    ProfessorRegisterComponent,
    ProfessorBlogComponent,
    ProfessorAddBlogComponent,
    SocialMediaComponent,
    ProfessorChangePasswordComponent,
    AddBillingComponent,
    EditBillingComponent,
    CourseCheckoutComponent,
    EditBlogComponent,
    ProfessorPendingBlogComponent,
    CartComponent,
    CourseDetailsComponent,
    AddCoursComponent,
    GetCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    InstructorsRoutingModule,
    NgxDropzoneModule,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ]
})
export class InstructorsModule { }
