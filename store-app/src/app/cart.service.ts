import { Injectable } from '@angular/core';
import { Product } from './models/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = [];
  constructor() {

  }

  getCart() {
    return this.productList;
  }

  addToCart(product: Product) {
    this.productList.push(product);
    return this.productList

  }
  clearCart() {
    this.productList = [];
    return this.productList;
  }
}
