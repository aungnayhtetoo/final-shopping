import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from 'shared/model/order';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  @Input('cart') cart!: ShoppingCart;

  shipping: any = {};
  userId : string = '';
  subscription!: Subscription;

  constructor(private orderService: OrderService, private route: Router,
    private auth: LoginAuthService) { }

  async ngOnInit() {
    this.subscription = this.auth.user$.subscribe(user => (user)? this.userId = user.uid : this.userId = '');
    this.autoFillName();
  }

  async productOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);    
    let result = await this.orderService.placeOrder(order);
    this.route.navigate(['order-success', result.key]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private async autoFillName() {
    let name = await this.auth.getName();    
    Object.assign(this.shipping, {name: name});
  }
}
