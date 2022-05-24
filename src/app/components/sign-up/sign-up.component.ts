import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  invalidLogin = false
  userForm:FormGroup;
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.userForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required])
    })
  }

  OnSubmit(){
    // console.log(this.userForm.value);
    
  }

}
