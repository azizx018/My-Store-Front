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

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.productList = this.cartService.getCart();

  }

  clearCart(): void {
    this.cartService.clearCart();
    this.productList = [];
    alert("Cart has been cleared.");
  }

}
