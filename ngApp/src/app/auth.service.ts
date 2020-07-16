import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private _registerUrl="http://localhost:3000/api/register";

  private loginUrl="http://localhost:3000/login";

  constructor( private http:HttpClient) { }
//   registerUser(user) 
//  {
//     return this.http.post<any>(this._registerUrl,user);
 
// }
 loginUser(user)
 {
   return this.http.post(this.loginUrl,user);
 }
 loggedIn(){
   return !!localStorage.getItem('token')
 }
 getToken() {
   return  localStorage.getItem('token')
 }

}