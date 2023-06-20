import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';

const routes: Routes = [
  { path:'' , component: HomeComponent},
  { path:'home' , component: HomeComponent},
  {path:'login',component: LoginComponent},
  { path: 'signup', component: SignUpComponent },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'career', component: CareerComponent},
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGuardService] },
  {
    path: 'ai',
    loadChildren: () => import('./modules/ai/ai.module').then(m => m.AiModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./modules/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'angular-material',
    loadChildren: () => import('./modules/angular-material/angular-material.module').then(m => m.AngularMaterialModule)
  },
  {
    path: 'aws',
    loadChildren: () => import('./modules/aws/aws.module').then(m => m.AwsModule)
  },
  {
    path: 'blockchain',
    loadChildren: () => import('./modules/blockchain/blockchain.module').then(m => m.BlockchainModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./modules/c-programming/c-programming.module').then(m => m.CProgrammingModule)
  },
  {
    path: 'c++',
    loadChildren: () => import('./modules/c-plus-programming/c-plus-programming.module').then(m => m.CPlusProgrammingModule)
  },
  {
    path: 'cn',
    loadChildren: () => import('./modules/cn/cn.module').then(m => m.CnModule)
  },
  {
    path: 'coa',
    loadChildren: () => import('./modules/coa/coa.module').then(m => m.CoaModule)
  },
  {
    path: 'compiler-design',
    loadChildren: () => import('./modules/compiler-design/compiler-design.module').then(m => m.CompilerDesignModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./modules/css/css.module').then(m => m.CssModule)
  },
  {
    path: 'cyber-security',
    loadChildren: () => import('./modules/cyber-security/cyber-security.module').then(m => m.CyberSecurityModule)
  },
  {
    path: 'data-science',
    loadChildren: () => import('./modules/data-science/data-science.module').then(m => m.DataScienceModule)
  },
  {
    path: 'dbms',
    loadChildren: () => import('./modules/dbms/dbms.module').then(m => m.DbmsModule)
  },
  {
    path: 'discrete',
    loadChildren: () => import('./modules/discrete/discrete.module').then(m => m.DiscreteModule)
  },
  {
    path: 'dsa',
    loadChildren: () => import('./modules/dsa/dsa.module').then(m => m.DsaModule)
  },
  {
    path: 'flutter',
    loadChildren: () => import('./modules/flutter/flutter.module').then(m => m.FlutterModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./modules/html/html.module').then(m => m.HtmlModule)
  },
  {
    path: 'java',
    loadChildren: () => import('./modules/java/java.module').then(m => m.JavaModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./modules/javascript/javascript.module').then(m => m.JavascriptModule)
  },
  {
    path: 'kubernetes',
    loadChildren: () => import('./modules/kubernetes/kubernetes.module').then(m => m.KubernetesModule)
  },
  {
    path: 'ml',
    loadChildren: () => import('./modules/ml/ml.module').then(m => m.MlModule)
  },
  {
    path: 'os',
    loadChildren: () => import('./modules/os/os.module').then(m => m.OsModule)
  },
  {
    path: 'python',
    loadChildren: () => import('./modules/python/python.module').then(m => m.PythonModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./modules/react/react.module').then(m => m.ReactModule)
  },
  {
    path: 'seo',
    loadChildren: () => import('./modules/seo/seo.module').then(m => m.SeoModule)
  },
  {
    path: 'software-engineering',
    loadChildren: () => import('./modules/software-engineering/software-engineering.module').then(m => m.SoftwareEngineeringModule)
  },
  {
    path: 'springboot',
    loadChildren: () => import('./modules/springboot/springboot.module').then(m => m.SpringbootModule)
  },
  {
    path: 'sql',
    loadChildren: () => import('./modules/sql/sql.module').then(m => m.SqlModule)
  },
  {
    path: 'system-design',
    loadChildren: () => import('./modules/system-design/system-design.module').then(m => m.SystemDesignModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./modules/typescript/typescript.module').then(m => m.TypescriptModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
