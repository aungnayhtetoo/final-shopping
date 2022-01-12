import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Order } from 'shared/model/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersByUserIdRef!: AngularFireList<any>;
  private ordersRef!: AngularFireList<any>;
  private ordersByIdRef!: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  getMapOrdersByUserId(uid: string) {
    this.ordersByUserIdRef = this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(uid));
    return this.ordersByUserIdRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key,...c.payload.val() }))  
      )
    )
  }

  getMapOrderById(id: string) {
    this.ordersByIdRef = this.db.list('/orders/' + id)
    return this.ordersByIdRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key,...c.payload.val() }))  
      )
    )
  }

  getMapOrder() {
    this.ordersRef = this.db.list('/orders')
    return this.ordersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key,...c.payload.val() }))  
      )
    )
  }

  async placeOrder(order: any) { 
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrder(): Observable<Order[]>{
    return this.db.list('/orders').valueChanges() as Observable<Order[]>;
  }

  getOrderByOrderId(id: string): Observable<Order> {
    return this.db.object('/orders/' + id).valueChanges() as Observable<Order>;
  }
}
