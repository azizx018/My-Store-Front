import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { Product } from '../models/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productList: Product[] = [];

  total(): number {
    return this.productList
      .map(product => product.price * product.quantity)
      .reduce((sum, tot) => sum += tot)
  }

  //product:Product
  productCount() {
    return this.productList
      .reduce((sum, prod) => sum += prod.quantity, 0)
  }

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.productList = this.cartService.getCart();

  }

  clearCart(): void {
    this.productList = this.cartService.clearCart();
    alert("Cart has been cleared.");
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1
    }
    this.productList = this.cartService.quantityZeroCheck()
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
  }


}
