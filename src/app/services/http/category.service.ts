import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from "src/app/models/category.model";

@Injectable()
export class CategoryService {

    baseUrl: string = 'http://localhost:3000';
    

    constructor(private http: HttpClient) {}
     

    getCategories() {       
        return this.http.get(`http://localhost:3000/shop/categories`);
    }

   
}