import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { EventCategoryComponent } from './admin/event-category/event-category.component';


@NgModule({
  declarations: [
    AllModulesComponent,
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule
  ]
})
export class AllModulesModule { }
