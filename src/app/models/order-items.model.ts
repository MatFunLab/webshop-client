import { Cart } from "./cart.model";
import { Product } from "./product.model";

export class OrderItems {
    id: number;
    quantity: number;
    cartId: Cart;
    productId: Product;
    desc: string;
}