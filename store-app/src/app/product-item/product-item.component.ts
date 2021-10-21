import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService, private router: Router) {
    this.product = {
      id: 0,
      url: '',
      name: '',
      price: 1,
      description: ''
    }
  }

  ngOnInit(): void {
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert("Item has been added to your cart!")
  }

  goToDetails(pageName: string) {
    this.router.navigate([`${pageName}`])
  }

}
