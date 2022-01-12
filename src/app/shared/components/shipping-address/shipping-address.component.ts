import { Order } from 'shared/model/order';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent {
  @Input('order') order!: Order

  constructor() { }

}
