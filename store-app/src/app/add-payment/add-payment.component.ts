import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  fullName!: string;
  address!: string;
  creditCard!: number;


  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
  }
  submitForm(): void {
    if (this.cartService.productList.length > 0) {
      alert(`${this.fullName} Thank you for your order!`)
      this.cartService.setName(this.fullName)
      this.router.navigate(['order-success'])
    }

  }

}
