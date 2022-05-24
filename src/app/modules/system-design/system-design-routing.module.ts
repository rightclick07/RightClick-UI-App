import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemDesignComponent } from './system-design.component';

const routes: Routes = [
  { path:'' , component: SystemDesignComponent,
   children:[
   {path: '',component:SystemDesignComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemDesignRoutingModule { }
