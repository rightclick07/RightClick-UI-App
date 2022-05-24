import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from '../java/java.component';

const routes: Routes = [
  { path:'' , component: JavaComponent,
   children:[
   {path: '',component:JavaComponent},]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
