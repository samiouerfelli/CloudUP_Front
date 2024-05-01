import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { EventCategoryComponent } from './admin/event-category/event-category/event-category.component';  // Import this module

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AllModulesComponent,
    EventCategoryComponent
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllModulesModule { }
