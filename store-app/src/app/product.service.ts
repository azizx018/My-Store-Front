import { Injectable } from '@angular/core';
import { Product } from './models/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/data.json');
  }

}

// [
//   {
//     id: 1,
//     imageUrl: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
//     productName: 'Backpack',
//     price: 7,
//     quantity: 1
//   },
//   {
//     id: 2,
//     imageUrl: 'https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
//     productName: 'Socks',
//     price: 3,
//     quantity: 1
//   }
// ];
