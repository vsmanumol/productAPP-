import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AuthService} from './auth.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';

// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard'
import { TokenInterceptorService } from './token-interceptor.service';
import { ProductService } from './product.service';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    ProductComponent,
    NewProductComponent,
    
    // LoginComponent,
    RegisterComponent,
    EditComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,ProductService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
      
          }
  
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
