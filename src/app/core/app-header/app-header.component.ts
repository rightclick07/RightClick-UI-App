import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/Auth/authentication.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  showSocialForMobile=false;
  showSocialForweb=true;
  myControl = new FormControl();
  courses = [
    {
      title:"Angular",
      routeUrl:"angular"
    },
    {
      title:"Angular Material",
      routeUrl:"angular-material"
    },
    {
      title:"HTML",
      routeUrl:"html"
    }
    ];
  options: string[] = ['Angular', 'Angular Material', 'HTML'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();
  constructor(private router:Router){
    
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  OnSearchCourse(element:string){
     let routeString=""
    for(let key of this.courses){
        if(key.title==element){
         routeString=key.routeUrl
        }
    }
    this.router.navigateByUrl(routeString)
  }
}
