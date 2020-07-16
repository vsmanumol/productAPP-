import { Component, OnInit } from '@angular/core';
import{ProductModel} from './product.model';
import {ProductService} from '../product.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
 
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
  
  delete(id): void {
    if (confirm("Are you sure you want to delete " + id + "?")){
       this.productService.deletData(id)
       .subscribe(()=>console.log("product with id= deleted"),
       (err)=>console.log(err)
       )




      //  .subscribe((res) => console.log(res));
    };

   }

   editProduct(_id): void {
  
   // console.log(id);
    //window.localStorage.removeItem("editUserId");
    // window.localStorage.setItem("editUserId", user.id.toString());
  this.router.navigate(['/edit',_id]);


   }
  
    
  
}
