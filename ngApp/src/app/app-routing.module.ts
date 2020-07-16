import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { NewProductComponent } from './new-product/new-product.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component:ProductComponent},
  {path:'view',component:ProductlistComponent},
{path:'add',component:NewProductComponent},
{path:'login',component:LoginComponent},

{path: 'edit/:id', component:EditComponent},
// {path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
