import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';
import { SendDataService } from 'src/app/services/sendData.service';
import { CartService } from 'src/app/services/http/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() product: Product;
  
  constructor(private sendDataService: SendDataService, 
              private httpService: CartService) { }

  ngOnInit() {
  }

  onAddToCart(product: Product) {
    const token = localStorage.getItem('id_token');
    if(token !== null) { 
      this.httpService.addToCart(product, token).subscribe((addedItem) => {
        console.log("----",addedItem);
        if(addedItem !== null) {
        }
      });
    }
   
    console.log(product);    

  }
}
