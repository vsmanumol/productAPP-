import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails:any={}
  constructor(private _auth:AuthService,private _router:Router) { }
  
  loginUser(){
//console.log(this.loginUserDetails);
 this._auth.loginUser(this.loginUserDetails)
.subscribe(

// res=>console.log(res),
// err=>console.log(err)

    res=>{
    console.log(res);
//     localStorage.setItem('token', res["token"])
    this._router.navigate(['/view']);
     }
)
err=>console.log(err)
}
  ngOnInit(): void {
   
  }

}
