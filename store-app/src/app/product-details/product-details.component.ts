import { identifierName } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //products: Product[] = [];
  product: Product | undefined;
  id: number = 1;

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productService.getProducts().subscribe(productList => {
        this.product = productList.find((item) => item.id.toString() === params["id"])
      })
    });


  }

  goToHome(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
}

