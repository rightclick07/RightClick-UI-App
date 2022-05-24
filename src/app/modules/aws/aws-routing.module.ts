import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsComponent } from './aws.component';

const routes: Routes = [
  { path:'' , component: AwsComponent,
   children:[
   {path: '',component:AwsComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsRoutingModule { }
