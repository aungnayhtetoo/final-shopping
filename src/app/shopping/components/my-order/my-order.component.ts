import { switchMap } from 'rxjs/operators';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { Order } from 'shared/model/order';
import { OrderService } from 'shared/services/order.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  order$: Observable<Order[]>

  constructor(private orderService: OrderService, private authService: LoginAuthService) { 
    this.order$ = this.authService.user$.pipe(
      switchMap(user => this.orderService.getMapOrdersByUserId(user.uid))
    )
  }

}
