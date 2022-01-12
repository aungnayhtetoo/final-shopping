import { Order } from 'shared/model/order';
import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/model/shopping-cart';

@Component({
  selector: 'check-out-card',
  templateUrl: './check-out-card.component.html',
  styleUrls: ['./check-out-card.component.css']
})
export class CheckOutCardComponent {
  @Input('cart') cart!: ShoppingCart;
  @Input('order') order!: Order;

  toggleState: boolean = false;

  constructor() { }


}
