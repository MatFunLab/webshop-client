import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "src/app/models/product.model";

@Injectable()
export class CartService {

    baseUrl: string = 'http://localhost:3000';
    

    constructor(private http: HttpClient) {}
     

    getCart(token: string) {
        const headers = new HttpHeaders({'Authorization':`Bearer ${token}`});
        
        return this.http.get(`http://localhost:3000/shop/cart`, {headers: headers});
    }

    addToCart(product: Product, token: string) {
        const headers = new HttpHeaders({'Authorization':`Bearer ${token}`});
        return this.http.post(`http://localhost:3000/shop/cart`, product, {headers: headers});
        
    }
    updateCart() {

    }
    deleteCart() {

    }
}