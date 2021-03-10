import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { EmailComponent } from './components/email/email.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'heroes',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'form',component: FormComponent},
  {path:'email',component: EmailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FormComponent,
    EmailComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
