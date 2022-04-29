import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './angular-material-component/autocomplete/autocomplete.component';
import { BadgeComponent } from './angular-material-component/badge/badge.component';
import { BottomSheetComponent } from './angular-material-component/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './angular-material-component/button-toggle/button-toggle.component';
import { ButtonComponent } from './angular-material-component/button/button.component';
import { CardComponent } from './angular-material-component/card/card.component';
import { CheckboxComponent } from './angular-material-component/checkbox/checkbox.component';
import { ChipsComponent } from './angular-material-component/chips/chips.component';
import { DatepickerComponent } from './angular-material-component/datepicker/datepicker.component';
import { DialogComponent } from './angular-material-component/dialog/dialog.component';
import { DividerComponent } from './angular-material-component/divider/divider.component';
import { EnvironmentSetupComponent } from './angular-material-component/environment-setup/environment-setup.component';
import { ExpansionPanelComponent } from './angular-material-component/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './angular-material-component/form-field/form-field.component';
import { GridListComponent } from './angular-material-component/grid-list/grid-list.component';
import { IconComponent } from './angular-material-component/icon/icon.component';
import { InputComponent } from './angular-material-component/input/input.component';
import { IntroComponent } from './angular-material-component/intro/intro.component';
import { ListComponent } from './angular-material-component/list/list.component';
import { MenuComponent } from './angular-material-component/menu/menu.component';
import { PaginatorComponent } from './angular-material-component/paginator/paginator.component';
import { ProgressBarComponent } from './angular-material-component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './angular-material-component/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './angular-material-component/radio-button/radio-button.component';
import { SelectComponent } from './angular-material-component/select/select.component';
import { SidenavComponent } from './angular-material-component/sidenav/sidenav.component';
import { SlideToggleComponent } from './angular-material-component/slide-toggle/slide-toggle.component';
import { SliderComponent } from './angular-material-component/slider/slider.component';
import { SnackbarComponent } from './angular-material-component/snackbar/snackbar.component';
import { SortingComponent } from './angular-material-component/sorting/sorting.component';
import { StepperComponent } from './angular-material-component/stepper/stepper.component';
import { TableComponent } from './angular-material-component/table/table.component';
import { TabsComponent } from './angular-material-component/tabs/tabs.component';
import { ToolbarComponent } from './angular-material-component/toolbar/toolbar.component';
import { TreeComponent } from './angular-material-component/tree/tree.component';

import { AngularMaterialComponent } from './angular-material.component';



const childRoutes: Routes = [
  { path:'' , component: AngularMaterialComponent,
    children:[
      {path: '',component:IntroComponent},  
  {path: 'intro',component:IntroComponent},
  {path: 'environment-setup',component:EnvironmentSetupComponent},
  {path: 'button',component:ButtonComponent},
  {path: 'badge',component:BadgeComponent},
  {path: 'card',component:CardComponent},
  {path: 'chips',component:ChipsComponent},
  {path: 'checkbox',component:CheckboxComponent},
  {path: 'selectbox',component:SelectComponent},
  {path: 'inputbox',component:InputComponent},
  {path: 'radio-button',component:RadioButtonComponent},
  {path: 'datepicker',component:DatepickerComponent},
  {path: 'icon',component:IconComponent},
  {path: 'form-field',component:FormFieldComponent},
  {path: 'expansion-panel',component:ExpansionPanelComponent},
  {path: 'list',component:ListComponent},
  {path: 'divider',component:DividerComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'dialog',component:DialogComponent},
  {path: 'bottom-sheet',component:BottomSheetComponent},
  {path: 'button-toggle',component:ButtonToggleComponent},
  {path: 'snackbar',component:SnackbarComponent},
  {path: 'grid-list',component:GridListComponent},
  {path: 'progress-bar',component:ProgressBarComponent},
  {path: 'spinner',component:ProgressSpinnerComponent},
  {path: 'slider',component:SliderComponent},
  {path: 'slide-toggle',component:SlideToggleComponent},
  {path: 'toolbar',component:ToolbarComponent},
  {path: 'sidenav',component:SidenavComponent},
  {path: 'stepper',component:StepperComponent},
  {path: 'tab',component:TabsComponent},
  {path: 'table',component:TableComponent},
  {path: 'pagination',component:PaginatorComponent},
  {path: 'sorting',component:SortingComponent},
  {path: 'autoComplete',component:AutocompleteComponent},
  {path: 'tree',component:TreeComponent}
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
export class AngularMaterialRoutingModule { }
