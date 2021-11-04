import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../models/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(public cartService: CartService) {

  }

  ngOnInit(): void {
  }

  clearCart(): void {
    this.cartService.clearCart();
    alert("Cart has been cleared.");
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decrementProduct(product)
  }

  increaseQuantity(product: Product): void {
    this.cartService.addOrIncrementProduct(product)
  }

  quantityChanged($event: any) {
    if ($event !== null) {
      this.cartService.quantityZeroCheck()
    }
  }
  removeItem(product: Product) {
    this.cartService.removeProduct(product)

  }
}
