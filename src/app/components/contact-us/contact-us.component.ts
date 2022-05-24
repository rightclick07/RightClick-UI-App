import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';

import { styles } from './mapstyles'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  formSubmitted: boolean = false;
  latitude = 51.678418;
  longitude = 7.809007;
  private map: google.maps.Map
  constructor() { }
  

  
  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
      emailId:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]),
      courseDetail:new FormControl(''),
    })

    let loader = new Loader({
      apiKey: 'AIzaSyBh5SF8rRadC2CU3KR1om1__l1vEPS7tr8'
    })

    loader.load().then(() => {
      // console.log('loaded gmaps')

      const location = { lat:12.844078150896806, lng:77.65700882262094}

      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: location,
        zoom: 6,
        
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
  onSubmit(element:any){
// console.log(element);

  }

  
}
