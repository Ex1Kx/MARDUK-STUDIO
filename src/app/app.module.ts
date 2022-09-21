// Angular Imports //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Angular Material & PrimeNG Imports //
import {MatToolbarModule} from '@angular/material/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

// Components Imports //
import { HomeComponent } from './components/Homescreen/home/home.component';
import { AboutUsComponent } from './components/Homescreen/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    // Angular Imports //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    // Angular Material & PrimeNG Imports //
    MatToolbarModule,
    FileUploadModule,
    HttpClientModule,
    ButtonModule,
    SplitButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
