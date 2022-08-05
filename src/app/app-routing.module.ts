import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'photos', component: PhotosComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
