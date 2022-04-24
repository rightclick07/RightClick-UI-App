import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getFullUserName(username:string){
    const stringUrl=environment.apiUrl+"/getFullUsername/"+username;
    const token=sessionStorage.getItem("token");
    return this.http.get(stringUrl);
  }
}
