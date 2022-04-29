import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-angular-material-sidenav',
  templateUrl: './angular-material-sidenav.component.html',
  styleUrls: ['./angular-material-sidenav.component.css']
})
export class AngularMaterialSidenavComponent implements OnInit {
  opened=false;
  id:any;
topics=[
  {routeName: 'intro',topic:"Introduction"},
  {routeName: 'environment-setup',topic:"Environment Setup"},
  {routeName: 'button',topic:"Button"},
  {routeName: 'badge',topic:"Badge"},
  {routeName: 'card',topic:"Cards"},
  {routeName: 'chips',topic:"Chips"},
  {routeName: 'checkbox',topic:"Checkbox"},
  {routeName: 'selectbox',topic:"Select Box"},
  {routeName: 'inputbox',topic:"Input Box"},
  {routeName: 'radio-button',topic:"Radio Button"},
  {routeName: 'datepicker',topic:"Date Picker"},
  {routeName: 'icon',topic:"Icon"},
  {routeName: 'form-field',topic:"Form Field"},
  {routeName: 'expansion-panel',topic:"Expansion Panel"},
  {routeName: 'list',topic:"List"},
  {routeName: 'divider',topic:"Divider"},
  {routeName: 'menu',topic:"Menu"},
  {routeName: 'dialog',topic:"Dialog Box"},
  {routeName: 'bottom-sheet',topic:"Bottom Sheet"},
  {routeName: 'button-toggle',topic:"Button Toggle"},
  {routeName: 'snackbar',topic:"Snackbar"},
  {routeName: 'grid-list',topic:"Grid List"},
  {routeName: 'progress-bar',topic:"Progress Bar"},
  {routeName: 'spinner',topic:"Spinner"},
  {routeName: 'slider',topic:"Slider"},
  {routeName: 'slide-toggle',topic:"Slide Toggle"},
  {routeName: 'toolbar',topic:"Toolbar"},
  {routeName: 'sidenav',topic:"Sidenav"},
  {routeName: 'stepper',topic:"Stepper"},
  {routeName: 'tab',topic:"Tabs"},
  {routeName: 'table',topic:"Data Table"},
  {routeName: 'pagination',topic:"Paginator"},
  {routeName: 'sorting',topic:"Sorting"},
  {routeName: 'autoComplete',topic:"Auto Complete"},
  {routeName: 'tree',topic:"Tree"},
  
  
  
]
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }


}
