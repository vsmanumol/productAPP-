import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser: any = {email:"",password:""};
  constructor(private _auth:AuthService,private _router:Router,private productService:ProductService) { }
 
  // registerUser()
  // {
  // this._auth.registerUser(this.registeredUser)
  // .subscribe(
  //   res=>console.log(res),
  //   err=>console.log(err)
  // )
  // }
  ngOnInit(): void {

  }
  registerUser(){
    this.productService.register(this.registeredUser);
    console.log("called");
    alert("Success");
    this._router.navigate(['/login']);

  } 
}
