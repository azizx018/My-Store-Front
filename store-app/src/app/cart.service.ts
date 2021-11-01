import { Injectable } from '@angular/core';
import { Product } from './models/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Product[] = [];
  fullName: string = '';


  constructor() {

  }

  getCart() {
    return this.productList;
  }

  syncCart(product: Product) {
    let existsInCart = this.productList
      .find(({ name }) => name === product.name)
    if (!existsInCart) {
      this.productList.push(product)
    } else {
      existsInCart = product
    }
    return this.quantityZeroCheck()
  }

  clearCart() {
    this.productList = [];
    return this.productList;
  }

  quantityZeroCheck(): Product[] {
    this.productList = this.productList.filter((product: Product) => product.quantity > 0)
    return this.productList;
  }
  setName(fullName: string) {
    this.fullName = fullName
  }
  cartTotal(): number {
    if (this.productList && this.productList.length > 0) {
      return this.productList
        .map(product => product.price * product.quantity)
        .reduce((sum, tot) => sum += tot)
    } else {
      return 0
    }
  }
  productCount() {
    return this.productList
      .reduce((sum, prod) => sum += prod.quantity, 0)
  }
}
