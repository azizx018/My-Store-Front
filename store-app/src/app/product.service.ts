import { Injectable } from '@angular/core';
import { Product } from './models/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('./assets/data.json');
  }

  getProductArray() {
    this.getProducts().subscribe(product => {
      this.products = product;
    });
    return this.products;
  }

  findProduct(id: number): Product | undefined {
    this.getProductArray();
    return this.products.find(p => p.id === id);
  }

}


