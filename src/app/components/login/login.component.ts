import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/AuthService/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn=false;
  userForm:FormGroup;
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.userForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  
  generateToken(){
    return this.loginservice.generateToken(this.userForm.value).subscribe(
      (response:any)=>{
        console.dir(response)
      const token=response.token;
      console.log("token"+token);
      
     },
     error=>{
       console.log(error);
       
     }
    )
  }

  checkLogin(){
    console.log(this.userForm.value);
    this.loginservice.saveToken(this.userForm.value);
    const username= this.userForm.get('username');
    this.loginservice.setUserName(username?.value);
    this.router.navigateByUrl('/home');
    
    
  }
  
}
