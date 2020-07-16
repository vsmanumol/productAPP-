import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../productlist/product.model';
import { ProductComponent } from '../product/product.component';
import { ProductlistComponent } from '../productlist/productlist.component';
import{ActivatedRoute} from  '@angular/router';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
 title:String='Add Product';
  constructor(private productService:ProductService,private route:ActivatedRoute,
    private router:Router) { }
   productItem=new ProductModel(null,null,null,null,null,null,null,null);
  ngOnInit(): void {


  }
  AddProduct(){
    this.productService.newProduct(this.productItem);
    console.log("called");
    alert("Success");
    this.router.navigate(['/']);

  } 
  



}
