import { Category } from "./category.model";

export class Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    desc: string;
    category: Category = new Category();
}