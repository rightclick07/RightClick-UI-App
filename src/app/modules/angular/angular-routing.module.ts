import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './angular-component/class-binding/class-binding.component';
import { ComponentModuleComponent } from './angular-component/component-module/component-module.component';
import { DataBindingComponent } from './angular-component/data-binding/data-binding.component';
import { DirectivesComponent } from './angular-component/directives/directives.component';
import { EnvironmentSetupComponent } from './angular-component/environment-setup/environment-setup.component';
import { EventBindingComponent } from './angular-component/event-binding/event-binding.component';
import { GettingStartedComponent } from './angular-component/getting-started/getting-started.component';
import { InterpolationComponent } from './angular-component/interpolation/interpolation.component';
import { IntroComponent } from './angular-component/intro/intro.component';
import { NgforDirectivesComponent } from './angular-component/ngfor-directives/ngfor-directives.component';
import { NgifDirectivesComponent } from './angular-component/ngif-directives/ngif-directives.component';
import { NgswitchDirectivesComponent } from './angular-component/ngswitch-directives/ngswitch-directives.component';
import { PropertyBindingComponent } from './angular-component/property-binding/property-binding.component';
import { StyleBindingComponent } from './angular-component/style-binding/style-binding.component';
import { TemplateReferenceVariableComponent } from './angular-component/template-reference-variable/template-reference-variable.component';
import { TwoWayDataBindingComponent } from './angular-component/two-way-data-binding/two-way-data-binding.component';

import { AngularComponent } from './angular.component';


const childRoutes: Routes = [
  { path:'' , component: AngularComponent,
children:[
  {path: '',component:IntroComponent},
  {path: 'intro',component:IntroComponent},
  {path: 'environment-setup',component:EnvironmentSetupComponent},
  {path: 'class-binding',component:ClassBindingComponent},
  {path: 'component-module',component:ComponentModuleComponent},
  {path: 'data-binding',component:DataBindingComponent},
  {path: 'directives',component:DirectivesComponent},
  {path: 'event-binding',component:EventBindingComponent},
  {path: 'getting-sarted',component:GettingStartedComponent},
  {path: 'interpolation',component:InterpolationComponent},
  {path: 'ngfor-directive',component:NgforDirectivesComponent},
  {path: 'ngif-directive',component:NgifDirectivesComponent},
  {path: 'ngswitch-directive',component:NgswitchDirectivesComponent},
  {path: 'property-binding',component:PropertyBindingComponent},
  {path: 'style-binding',component:StyleBindingComponent},
  {path: 'template-reference-variable',component:TemplateReferenceVariableComponent},
  {path: 'two-way-data-binding',component:TwoWayDataBindingComponent},
]
},
  
];
const parentRoutes: Routes = [
 
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
