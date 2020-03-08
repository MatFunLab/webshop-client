import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() urlImage: string;
  @Input() baseUrl: string;

  constructor() { }

  ngOnInit() {
  
  }
  
   
  
  
}
