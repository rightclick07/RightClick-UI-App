import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserCredential } from 'src/app/Interfaces/UserCredential';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  jwtToken:string="";
  constructor(private http:HttpClient) { }

generateToken(credential:UserCredential){
  const urlString=environment.apiUrl+"/token";
  return this.http.post(urlString,credential)
}

  saveToken(query:UserCredential) {
    // console.log(query);
    
    this.generateToken(query).subscribe(
      (respose:any)=>{
       this.jwtToken= respose.token
      //  console.log(this.jwtToken);
       
       if(this.jwtToken){
        sessionStorage.setItem("token",this.jwtToken)
      }
    },error=>{
      // console.log(error); 
    }
    );
    
  }
  public setUserName(username:string){
    sessionStorage.setItem("username",username)
  }
  public getUserFullName(){
    const username=sessionStorage.getItem("username");
    return username;
  }

  public getToken(){
   return sessionStorage.getItem("token");
  }
  isUserLoggedIn() {
    if(this.getToken()){
      return true
    }else{
       return false;
    }
    
  }

  clear() {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
  }
}