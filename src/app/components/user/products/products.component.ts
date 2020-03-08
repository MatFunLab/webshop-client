import { Component, OnInit } from '@angular/core';
import { SendDataService } from 'src/app/services/sendData.service';
import { Subscription } from 'rxjs';
import { LoginSignUpService } from 'src/app/services/http/login-signup.service';
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

 

}
