import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ]
})
export class BlogModule { }
