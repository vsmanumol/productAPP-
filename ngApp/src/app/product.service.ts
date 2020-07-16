import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductModel } from './productlist/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }
 id: number;
  setCurrentId(id){
    this.id=id;
  }
  getCurrentId(){
   return  this.id;
  }
  viewProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  



  getProducts(){
  return this.http.get("http://localhost:3000/productslist");
}

newProduct(item)
{
  return this.http.post("http://localhost:3000/insert",{"product":item})
  .subscribe(data=>{console.log(data)})
}

register(user)
{
  return this.http.post("http://localhost:3000/register",user)
  .subscribe(data=>{console.log(data)})
}

// //edit product
// editnewProduct(item)
// {
//   return this.http.post("http://localhost:3000/insert",{"product":item})
//   .subscribe(data=>{console.log(data)})
// }


editgetProducts(id){
  return this.http.get("http://localhost:3000/edit/"+id);
}
// editEmployees(id): Observable<{}>
// {
// const url2 = `http://localhost:3000/edit/${id}`;
// return this.http.get<ProductModel[]>(url2);
// }
//delete
deletData(id:number)
{
  //return this.http.get<any>("http://localhost:3000/delete/"+id);
  return this.http.delete<void>("http://localhost:3000/delete/"+id)

}

}
