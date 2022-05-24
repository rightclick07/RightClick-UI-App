import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbmsComponent } from './dbms.component';

const routes: Routes = [
  { path:'' , component: DbmsComponent,
   children:[
   {path: '',component:DbmsComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbmsRoutingModule { }
