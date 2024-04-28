import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
  { path: '', component: AllModulesComponent,
    children: [
      { path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
      { path: 'instructors',
        loadChildren: () => import('./instructors/instructors.module').then(m => m.InstructorsModule) },
      { path: 'students',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
