import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  fullName: string = '';
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.fullName = this.cartService.fullName
    this.total = this.cartService.cartTotal()
    this.cartService.clearCart()
  }


}
