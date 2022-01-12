import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  subscription!: Subscription;
  cart$!: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService, private route: Router) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    
  }

  checkOut() {
    this.route.navigate(['check-out']);
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }

}
