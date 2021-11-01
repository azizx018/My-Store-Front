import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productList: Product[] = [];


  constructor(public cartService: CartService) {

  }

  ngOnInit(): void {
    this.productList = this.cartService.getCart();
    this.cartService.cartTotal()
    this.cartService.productCount()

  }

  clearCart(): void {
    this.productList = this.cartService.clearCart();
    alert("Cart has been cleared.");
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity -= 1
    }
    this.productList = this.cartService.syncCart(product)
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
    this.productList = this.cartService.syncCart(product)
  }


}
