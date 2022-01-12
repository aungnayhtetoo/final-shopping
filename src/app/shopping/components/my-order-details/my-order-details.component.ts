import { OrderService } from 'shared/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from 'shared/model/order';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-order-details',
  templateUrl: './my-order-details.component.html',
  styleUrls: ['./my-order-details.component.css']
})
export class MyOrderDetailsComponent implements OnInit {
  id: string | null;
  order$!: Observable<Order>;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    //console.log(this.id);
    

    if(this.id) {
      this.order$ = this.orderService.getOrderByOrderId(this.id);
    }
  }

  goBack() {
    window.history.back();
  }

  ngOnInit(): void {
  }

}
