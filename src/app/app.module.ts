
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OfficeService } from './service/office.service';
import { AddOfficeComponent } from './add-office/add-office.component'
import { OfficeListComponent } from './office-list/office-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from  'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PlacementComponent } from './placement/placement.component';
import { RequirementComponent } from './requirement/requirement.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    AddOfficeComponent,
    OfficeListComponent,
    RegisterComponent,
    LoginComponent,
    PlacementComponent,
    RequirementComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     
  ],
  providers: [OfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

