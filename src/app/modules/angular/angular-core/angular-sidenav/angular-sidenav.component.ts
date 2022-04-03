import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-sidenav',
  templateUrl: './angular-sidenav.component.html',
  styleUrls: ['./angular-sidenav.component.css']
})
export class AngularSidenavComponent implements OnInit {
  opened=false;
topics=[
  
  {routeName: 'intro',topic:"Introduction"},
  {routeName: 'environment-setup',topic:"Environment Setup"},
  {routeName: 'getting-sarted',topic:"Getting Started"},
  {routeName: 'component-module',topic:"Component & Modules"},
  {routeName: 'data-binding',topic:"Data Binding"},
  {routeName: 'interpolation',topic:"Interpolation"},
  {routeName: 'property-binding',topic:"Property Binding"},
  {routeName: 'class-binding',topic:"Class Binding"},
  {routeName: 'style-binding',topic:"Style Binding"},
  {routeName: 'event-binding',topic:"Event Binding"},
  {routeName: 'directives',topic:"Directive"},
  {routeName: 'template-reference-variable',topic:"Template Variable"},
  {routeName: 'two-way-data-binding',topic:"Two Way Binding"},
  {routeName: 'ngif-directive',topic:"NgIf Directive"},
  {routeName: 'ngswitch-directive',topic:"NgSwitch Directive"},
  {routeName: 'ngfor-directive',topic:"NgFor Directive"},
  
  
  
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
