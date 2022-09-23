import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeComponent } from './office/office.component';
import { PlacementComponent } from './placement/placement.component';
import { RegisterComponent } from './register/register.component';
import { RequirementComponent } from './requirement/requirement.component';
const routes: Routes = [
  {path: ' ', component: HomeComponent},
  //{path: 'navbar', component:NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'office', component: OfficeComponent},
  {path: 'add-office', component: AddOfficeComponent},
  {path: 'update-office/:id', component: AddOfficeComponent},
  {path: 'office', component: OfficeListComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'placement',component: PlacementComponent},
  {path: 'requirement',component: RequirementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



