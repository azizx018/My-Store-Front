import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
        productName: 'Backpack',
        price: 7,
        quantity: 1
      },
      {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
        productName: 'Socks',
        price: 3,
        quantity: 1
      }
    ];
  }

}
