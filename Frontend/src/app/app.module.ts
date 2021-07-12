import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardcomponent } from './property/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/user.service';
import { HousingService } from './services/housing.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'buy-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },

  { path: '**', component: PropertyListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardcomponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, AlertifyService, HousingService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
