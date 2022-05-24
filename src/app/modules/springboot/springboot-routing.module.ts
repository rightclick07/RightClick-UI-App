import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringbootComponent } from './springboot.component';

const routes: Routes = [
  { path:'' , component: SpringbootComponent,
   children:[
   {path: '',component:SpringbootComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpringbootRoutingModule { }
