import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/http/cart.service';
import { SendDataService } from 'src/app/services/sendData.service';
import { OrderItems } from 'src/app/models/order-items.model';
import { config } from 'src/environments/config/config';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  baseUrl: string = config.baseUrl;
  cart: Array<OrderItems> = new Array<OrderItems>();
  unsubGetCart: Subscription;
  noCartMessage: boolean = false;

  constructor(private cartService: CartService, 
              private sendDataService: SendDataService) { }

  ngOnInit() {
    const token = localStorage.getItem('id_token');
    this.unsubGetCart = this.cartService.getCart(token).subscribe((cart: Array<OrderItems>) => {
      console.log('products in bag-----', cart);
      if(cart) {
        this.cart = cart;
      } else {
        this.noCartMessage = true;
      }
     
    }, (err) => {
      console.log(err);
    });
  }

  goToProducts() {
    
     this.sendDataService.showCart.next(false);
  }

  onOrder(cart: Array<OrderItems>) {
      console.log('ORDER: =====', cart);
      //TODO transfer ordered items to STRIPE (price and users data)
      
  }

  ngOnDestroy() {
    this.unsubGetCart.unsubscribe();
  }
 
}
