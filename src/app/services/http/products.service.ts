import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class ProductsService {

    baseUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getProducts(page?: string) {
        if(page === undefined) {
            return this.http.get(`${this.baseUrl}/shop/products`);
        } else {
            return this.http.get(`${this.baseUrl}/shop/products`, { params: {
                                                                     page 
                                                                    }
                                                                 });
        }
       
    }
    /* getSearchProducts(searchCriteria: string) {
        let params = new  HttpParams().set('searchCriteria', searchCriteria);
        return this.http.get(`http://localhost:3000/shop/searchproducts`, {params: params});
    } */
}
