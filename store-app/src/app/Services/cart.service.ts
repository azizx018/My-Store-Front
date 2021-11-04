import { Injectable } from '@angular/core';
import { Product } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList: Product[] = [];
  fullName: string = '';


  constructor() {

  }

  getCart() {
    return this.productList;
  }


  getProduct(product: Product): Product | undefined {
    return this.productList.find(({ id }) => id === product.id)
  }

  addOrIncrementProduct(product: Product) {
    let existsInCart = this.getProduct(product)
    if (existsInCart) {
      existsInCart.quantity++
    } else {
      this.productList.push({ ...product, quantity: 1 })
    }
  }

  decrementProduct(product: Product) {
    let existsInCart = this.getProduct(product)
    if (existsInCart) {
      existsInCart.quantity--
    }
    this.quantityZeroCheck()
  }

  removeProduct(product: Product) {
    let existsInCart = this.getProduct(product)
    if (existsInCart) {
      existsInCart.quantity = 0
      this.quantityZeroCheck()
    }
  }

  clearCart() {
    this.productList = [];
  }

  quantityZeroCheck() {
    this.productList = this.productList.filter((product: Product) => product.quantity > 0)

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
