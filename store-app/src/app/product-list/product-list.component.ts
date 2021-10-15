import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productName: string = 'Products';
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
        productName: 'Backpack',
        price: 7
      },
      {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
        productName: 'Socks',
        price: 3
      }
    ];
  }

}
