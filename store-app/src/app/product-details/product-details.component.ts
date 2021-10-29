import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../models/products';
import { ProductService } from '../product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //products: Observable<Product[]> | undefined;
  products: Product[] = [];
  product: Product | undefined;
  // product: Product = {
  //   id: 0,
  //   url: '',
  //   name: 'string',
  //   price: 1,
  //   description: ''
  // }
  //id= number;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private cartService: CartService, private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find(p => p.id === this.product?.id);
      console.log(this.product?.id)
    });
    // this.productService.getProducts().subscribe(products => {
    //   this.product = products.find((p) => p.id === this.id) as unknown as Product;
    //   console.log(this.product)
    // })
    // this.activateRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.id = Number(params.get('id'));
    //   this.product = this.productService.findProduct(this.id) as Product;
    //   console.log(this.id)
    // });
  }

  goToHome(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
}
