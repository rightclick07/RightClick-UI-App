import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';

const routes: Routes = [
  { path:'' , component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'about-us', component: AboutUsComponent},
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGuardService] },
  {
    path: 'angular',
    loadChildren: () => import('./modules/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'angular-material',
    loadChildren: () => import('./modules/angular-material/angular-material.module').then(m => m.AngularMaterialModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./modules/html/html.module').then(m => m.HtmlModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
