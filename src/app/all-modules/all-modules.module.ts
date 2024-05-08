import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { EventCategoryComponent } from './admin/event-category/event-category.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AllModulesComponent,
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AllModulesModule { }
