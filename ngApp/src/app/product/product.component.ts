import { Component, OnInit } from '@angular/core';

import{ProductModel} from '../productlist/product.model';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:string="Product list";
  products :ProductModel[];
  imageWidth :number=59;
  imageMargin:number=2;
  showImage:boolean=false;
  constructor(private productService:ProductService,private router:Router){}
  toggleImage():void{
    this.showImage=!this.showImage;
  }
   ngOnInit(): void {
   this.productService.getProducts().subscribe(data=>{
     this.products=JSON.parse(JSON.stringify(data));
   })
 
   } 
   
   
    
   
     
   
 }
 