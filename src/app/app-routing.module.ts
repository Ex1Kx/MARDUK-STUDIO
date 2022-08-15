// Angular Imports //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Homescreen Imports English //
import { HomeComponent } from './components/English/Homescreen/home/home.component';
import { AboutUsComponent } from './components/English/Homescreen/about-us/about-us.component';
// Homescreen Imports Español //
import { HomeEsComponent } from './components/Spanish/HomeScreen/home-es/home-es.component';
import { AboutEsComponent } from './components/Spanish/HomeScreen/about-es/about-es.component';
const routes: Routes = [
  // Principal Route //
  {path: '', redirectTo: '/En', pathMatch: 'full'},
  // Homescreen Routes English//
  {path: 'En', component:HomeComponent},
  {path: 'AboutUs/En', component:AboutUsComponent},
  // Homescreen Routes Español //
  {path: 'Es', component:HomeEsComponent},
  {path: 'AboutUs/Es', component:AboutEsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
