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
    const existsInCart = this.productList
      .find(({ name }) => name === product.name);
    if (!existsInCart) {
      this.productList.push({ ...product, quantity: 1 });
      return;
    }
    existsInCart.quantity += 1;
  }

  clearCart() {
    this.productList = [];
    return this.productList;
  }

  quantityZeroCheck(): Product[] {
    this.productList = this.productList.filter((product: Product) => product.quantity > 0)
    return this.productList;
  }
}
