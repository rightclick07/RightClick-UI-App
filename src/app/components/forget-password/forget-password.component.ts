import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
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

  

}
