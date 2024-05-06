import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {BlogDetailsComponent} from './all-modules/blog/blog-details/blog-details.component';
import {BlogListComponent} from './all-modules/blog/blog-list/blog-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'blog/blog-details/:idpub', component: BlogDetailsComponent },
  {path: 'blog/blog-list', component: BlogListComponent},
  { path: '', loadChildren: () => import('./all-modules/all-modules.module').then(m => m.AllModulesModule) },
  { path: '**', redirectTo: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
