import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EvaluationformComponent } from './evaluationform/evaluationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {EvalFormService} from '../app/Services/evalForm_service/eval-form.service';

const appRoutes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: '' , redirectTo: '/login' , pathMatch: 'full'},
    { path: 'home' , component: MainpageComponent},
    { path: 'signup' , component: SignuppageComponent},
    { path: 'evaluation', component: EvaluationformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    SignuppageComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    EvaluationformComponent,
   // BrowserAnimationsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EvalFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
