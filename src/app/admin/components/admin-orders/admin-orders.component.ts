import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Order } from 'shared/model/order';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  
  //created an array to keep track of all the products, client side.
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()

  order$!: Observable<Order[]>
  orderArr!: Order[];

  constructor(private orderService: OrderService, private authService: LoginAuthService) { 
    
  }
  ngOnInit(): void {
    this.order$ = this.orderService.getMapOrder();
    this.order$.subscribe(orders => {
      this.orderArr = orders

      this.dtTrigger.next();
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
    }
  }
}
