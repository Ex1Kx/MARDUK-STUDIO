// Angular Imports //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Homescreen Imports //
import { HomeComponent } from './components/Homescreen/home/home.component';
import { AboutUsComponent } from './components/Homescreen/about-us/about-us.component';

const routes: Routes = [
  // Principal Route //
  {path: '', redirectTo: '/', pathMatch: 'full'},
  // Homescreen Routes //
  {path: '', component:HomeComponent},
  {path: 'AboutUs', component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
