// Angular Imports //
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material & PrimeNG Imports //
import {MatToolbarModule} from '@angular/material/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services Imports //
import { JSLOADERService } from './Services/JSLOADER/jsloader.service';

// Components Imports //
import { HomeComponent } from './components/English/Homescreen/home/home.component';
import { AboutUsComponent } from './components/English/Homescreen/about-us/about-us.component';
import { HomeEsComponent } from './components/Spanish/HomeScreen/home-es/home-es.component';
import { AboutEsComponent } from './components/Spanish/HomeScreen/about-es/about-es.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HomeEsComponent,
    AboutEsComponent
  ],
  imports: [
    // Angular Imports //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular Material & PrimeNG Imports //
    MatToolbarModule,
    FileUploadModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [
    JSLOADERService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
