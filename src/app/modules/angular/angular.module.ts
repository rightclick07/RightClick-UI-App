import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularSidenavComponent } from './angular-core/angular-sidenav/angular-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IntroComponent } from './angular-component/intro/intro.component';
import { EnvironmentSetupComponent } from './angular-component/environment-setup/environment-setup.component';
import { GettingStartedComponent } from './angular-component/getting-started/getting-started.component';
import { ComponentModuleComponent } from './angular-component/component-module/component-module.component';
import { DataBindingComponent } from './angular-component/data-binding/data-binding.component';
import { InterpolationComponent } from './angular-component/interpolation/interpolation.component';
import { PropertyBindingComponent } from './angular-component/property-binding/property-binding.component';
import { ClassBindingComponent } from './angular-component/class-binding/class-binding.component';
import { StyleBindingComponent } from './angular-component/style-binding/style-binding.component';
import { EventBindingComponent } from './angular-component/event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './angular-component/template-reference-variable/template-reference-variable.component';
import { TwoWayDataBindingComponent } from './angular-component/two-way-data-binding/two-way-data-binding.component';
import { DirectivesComponent } from './angular-component/directives/directives.component';
import { NgifDirectivesComponent } from './angular-component/ngif-directives/ngif-directives.component';
import { NgswitchDirectivesComponent } from './angular-component/ngswitch-directives/ngswitch-directives.component';
import { NgforDirectivesComponent } from './angular-component/ngfor-directives/ngfor-directives.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AngularComponent,
    AngularSidenavComponent,
    IntroComponent,
    EnvironmentSetupComponent,
    GettingStartedComponent,
    ComponentModuleComponent,
    DataBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayDataBindingComponent,
    DirectivesComponent,
    NgifDirectivesComponent,
    NgswitchDirectivesComponent,
    NgforDirectivesComponent,
    
   
  ],
  imports: [
    AngularRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class AngularModule { }
