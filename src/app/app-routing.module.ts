import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: '',component: HomeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'form',component: FormComponent,canActivate:[AuthGuard]},
  {path:'email',component: EmailComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
