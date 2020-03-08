import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'  
})
export class SendDataService {
  showLoginForm = new BehaviorSubject<boolean>(false);
  showSignupForm = new BehaviorSubject<boolean>(false);
  isLoggedIn = new BehaviorSubject<boolean>(false);
//toggle showHideCart
  showCart = new BehaviorSubject<boolean>(false);


  

  
}

