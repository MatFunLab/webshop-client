import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './services/http/http-error.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { MainComponent } from './components/user/main/main.component';
import { ProductImageComponent } from './components/user/product-image/product-image.component';
import { ProductDetailsComponent } from './components/user/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/user/products/products.component';

import { SendDataService } from './services/sendData.service';
import { LoginSignUpService } from './services/http/login-signup.service';
import { CartService } from './services/http/cart.service';
import { ProductsService } from './services/http/products.service';
import { OrderComponent } from './components/user/order/order.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { CategoryService } from './services/http/category.service';
import { LoginComponent } from './components/shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductImageComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductsComponent,
    OrderComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },
    SendDataService, LoginSignUpService, ProductsService, CartService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
