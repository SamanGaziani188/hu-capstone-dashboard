import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const appRoutes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: '' , redirectTo: '/login' , pathMatch: 'full'},
    { path: 'home' , component: MainpageComponent},
    { path: 'signup' , component: SignuppageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    SignuppageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
