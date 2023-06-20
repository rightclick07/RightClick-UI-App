import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  checked = false;
  constructor(private router: Router, private build: FormBuilder) { }

  form: FormGroup = new FormGroup({});
  ngOnInit() {
    this.initializeLoginForm();
   }
  
  openSignup() {
    this.router.navigate(['/signup'])

  }
  initializeLoginForm() {
    this.form = this.build.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]

    })

  }
  onSubmit(form:FormGroup){
    console.log(form.value);
    
  }

}
