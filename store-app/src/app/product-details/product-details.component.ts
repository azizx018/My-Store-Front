import { identifierName } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/products';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  id: number = 1;

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProducts().subscribe(productList => {
      this.product = productList.find((item) => item.id === id)
    })



  }

  goToHome(pageName: string) {
    this.router.navigate([`${pageName}`])
  }
}

