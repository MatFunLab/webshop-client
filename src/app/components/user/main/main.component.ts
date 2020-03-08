import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/http/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { SendDataService } from 'src/app/services/sendData.service';
import { CategoryService } from 'src/app/services/http/category.service';
import { Category } from 'src/app/models/category.model';
import { config } from 'src/environments/config/config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  baseUrl: string = config.baseUrl;
  searchVal: string;
  fromVal: string;
  toVal: string;
  noProducts: boolean = false;

  //to show 3 images per row
  regularDistribution = 100 / 3;

  products: Array<Product> = new Array();
  categories: Array<Category> = new Array<Category>();
  category: string;
  topPrice: string;
  lowPrice: string;
  keyword: string;
  isKeywordFilter: boolean = false;
  isCategoryFilter: boolean = false;
  isPriceFilter: boolean = false;
  unsubGetProducts: Subscription;
  unsubGetCategories: Subscription;
  showCartBtn: boolean = true;
  showCart: boolean = false;
  page: string = '1'; // query param products limit

  constructor(private productsService: ProductsService,
              private sendDataService: SendDataService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllProducts(1);
    this.getAllProducts(undefined);
    this.getAllCategories();
   
  }

  getAllCategories() {
    this.unsubGetCategories = this.categoryService.getCategories().subscribe((categories: Array<Category>) => {
      console.log(categories);
      this.categories = categories;
    }, (err) => {
      console.log(err);
    });
  }

  getAllProducts(page) {
    this.unsubGetProducts = this.productsService.getProducts(page).subscribe((products: Array<Product>) => {
      console.log(products);
      this.products = products;
    }, (err) => {
      console.log(err);
    });
  }

  

  goToCart() {
    this.showCartBtn = false;
    this.showCart = true;
   
  }
  ngOnDestroy() {
    this.unsubGetProducts.unsubscribe();
    this.unsubGetCategories.unsubscribe();
    
  }
  
//toggle show/hide cart and btn
  ngAfterViewInit() {
    this.sendDataService.showCart.subscribe((isCartShow => {
      this.showCart = isCartShow;
      this.showCartBtn = !isCartShow;
      
    }));
  }
toggleArrow(x) {
    x.path[1].classList.toggle("change"); 
    const leftPanel = document.getElementById("left-panel");
    leftPanel.classList.toggle("translateHorizontally");
  }
onSearch() {
  let substr = this.searchVal.slice(0, 3); //first three chars of value user entered
  
 let filteredProducts = this.products.filter((product) => {
   let substrProdDesc = product.desc.split(" ");
   let isKeywordFoundInDesc = substrProdDesc.map(desc => {
     if(desc.slice(0, 3) === substr)
     return product;
   })
   let isFound = false;
   for(let i=0; i<isKeywordFoundInDesc.length; i++) {
     if(isKeywordFoundInDesc[i] !== undefined) {
       isFound = true;
     }
   }
   //check if first three chars in product name and search string are same or first three chars in every word in desc
   let substrProdName = product.name.slice(0,3);
   if(substrProdName === substr || isFound)
   return true;
 });
 if(this.searchVal !== "") {
    this.products = filteredProducts;
    this.keyword = this.searchVal;
    this.isKeywordFilter = true;
    
 } else {
    this.products = [];
    this.noProducts = true;
 }

}

refineByCategory(category: Category) {

  console.log('category picked: ', category)
  console.log('products:' ,this.products)
  let filteredProducts = this.products.filter((product) => {
    if(product.category.id === category.id) {
      return product;
    } 
  });

  if(filteredProducts.length !== 0) {
    this.products = filteredProducts;
    this.category = category.name;
    this.isCategoryFilter = true;

  } else {
    this.products = []; 
    this.noProducts = true;
  }

}

onSearchPrice() {
 
  const fromPrice = +this.fromVal;
  const toPrice = +this.toVal;

  const filteredProducts = this.products.filter(product => {
    if(product.price >= fromPrice && product.price <= toPrice) {
      return product;
    }
  });

  if(filteredProducts.length !== 0) {
    this.products = filteredProducts;
    this.topPrice = this.toVal;
    this.lowPrice = this.fromVal;
    this.isPriceFilter = true;
  } else {
    this.products = [];
    this.noProducts = true;
    
  }
}

onClearAppliedFilters() {
  this.isPriceFilter = false;
  this.isCategoryFilter = false;
  this.isKeywordFilter = false;
  this.getAllProducts(this.page);
  this.getAllProducts(undefined);
}

}
