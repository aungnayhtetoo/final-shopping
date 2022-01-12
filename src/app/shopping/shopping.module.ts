import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrderDetailsComponent } from './components/my-order-details/my-order-details.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    MyOrderDetailsComponent,
    CheckOutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      { path: 'my/orders/:id', component: MyOrderDetailsComponent, canActivate: [AuthGuard]},
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuard]},
    ]),
  ]
})
export class ShoppingModule { }
