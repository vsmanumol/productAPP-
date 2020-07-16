import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../productlist/product.model';
import { ProductComponent } from '../product/product.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import{ActivatedRoute} from  '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  form:any = {}
  products :ProductModel[];
  title:String='Edit Product';
  //employee: Employee[];
  id: number;
  productItem:ProductModel;
  
  
  constructor(private productService:ProductService,private route:ActivatedRoute,
    private router:Router) { }

//productItem=new ProductModel(null,null,null,null,null,null,null,null);




  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.editgetProducts(id).subscribe(data=>{
      this.products=JSON.parse(JSON.stringify(data))
    })
 
//   this.route.paramMap.subscribe(parameterMap=>{
//  const id=+parameterMap.get('id');
//  this.getEditid(id);
//   });
  }

// private getEditid(id){
//   if(id===0){
//     this.productItem ={
//       productId:null,
//      productName:null,
//      productCode:null,
//     releaseDate:null,
//      description:null,
//      price:null,
//      starRating:null,
//      imageUrl:null
//     };
//   }
//   else{
//     this.productService.editgetProducts(id);
//   }
// }


  //this for update adding function
  // AddeditProduct(){
  //   this.productService.editnewProduct(this.productItem);
  //   console.log("called");
  //   alert("Success");
  //   this.router.navigate(['/']);

  // } 
  



}
