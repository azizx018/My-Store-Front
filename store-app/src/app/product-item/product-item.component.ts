import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addItem: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService, private router: Router) {
    this.product = new Product()
  }

  ngOnInit(): void {
  }
  // addToCart(product: Product) {
  //   this.cartService.addOrIncrementProduct(product);
  //   alert("Item has been added to your cart!")
  // }

  add(product: Product): void {
    this.addItem.emit(this.product)
  }

}
