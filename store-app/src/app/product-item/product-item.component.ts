import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 0,
      imageUrl: '',
      productName: '',
      price: 1
    }
  }

  ngOnInit(): void {
  }

}
