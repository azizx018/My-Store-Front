import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      imageUrl: '',
      productName: '',
      price: 1,
      quantity: 1
    }
  }

  ngOnInit(): void {
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert("Item has been added to your cart!")
  }

}
