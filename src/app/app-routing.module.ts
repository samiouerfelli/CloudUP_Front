import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ChatComponent } from './chat/chat.component';
import { ReclamarchivesComponent } from './reclamarchives/reclamarchives.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', loadChildren: () => import('./all-modules/all-modules.module').then(m => m.AllModulesModule) },
  { path: 'reclamation', component: ReclamationComponent},
  { path: 'reclamation/chat', component: ChatComponent},
  { path: 'reclamation/archives', component: ReclamarchivesComponent},
  { path: '**', redirectTo: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
