import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './angular-material.component';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularMaterialSidenavComponent } from './angular-material-core/angular-material-sidenav/angular-material-sidenav.component';
import { AutocompleteComponent } from './angular-material-component/autocomplete/autocomplete.component';
import { BadgeComponent } from './angular-material-component/badge/badge.component';
import { BottomSheetComponent } from './angular-material-component/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './angular-material-component/button/button.component';
import { ButtonToggleComponent } from './angular-material-component/button-toggle/button-toggle.component';
import { CardComponent } from './angular-material-component/card/card.component';
import { CheckboxComponent } from './angular-material-component/checkbox/checkbox.component';
import { ChipsComponent } from './angular-material-component/chips/chips.component';
import { DatepickerComponent } from './angular-material-component/datepicker/datepicker.component';
import { DialogComponent } from './angular-material-component/dialog/dialog.component';
import { DividerComponent } from './angular-material-component/divider/divider.component';
import { ExpansionPanelComponent } from './angular-material-component/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './angular-material-component/form-field/form-field.component';
import { GridListComponent } from './angular-material-component/grid-list/grid-list.component';
import { MenuComponent } from './angular-material-component/menu/menu.component';
import { PaginatorComponent } from './angular-material-component/paginator/paginator.component';
import { ProgressBarComponent } from './angular-material-component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './angular-material-component/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './angular-material-component/radio-button/radio-button.component';
import { RippleComponent } from './angular-material-component/ripple/ripple.component';
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
import { TooltipComponent } from './angular-material-component/tooltip/tooltip.component';
import { TreeComponent } from './angular-material-component/tree/tree.component';
import { IntroComponent } from './angular-material-component/intro/intro.component';
import { EnvironmentSetupComponent } from './angular-material-component/environment-setup/environment-setup.component';
import { InputComponent } from './angular-material-component/input/input.component';
import { IconComponent } from './angular-material-component/icon/icon.component';
import { ListComponent } from './angular-material-component/list/list.component';


@NgModule({
  declarations: [
    AngularMaterialComponent,
    AngularMaterialSidenavComponent,
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RippleComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortingComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
    IntroComponent,
    EnvironmentSetupComponent,
    InputComponent,
    IconComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class AngularMaterialModule { }
