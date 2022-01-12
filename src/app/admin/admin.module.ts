import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { MyOrderDetailsComponent } from 'shopping/components/my-order-details/my-order-details.component';


@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ManageUserComponent,
    ProductFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([ 
      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
        path: 'admin/orders/:id', 
        component: MyOrderDetailsComponent, 
        canActivate: [AuthGuard, AdminAuthGuard]
      },
    ]),
  ],
  providers: [
    AdminAuthGuard,
  ],
})
export class AdminModule { }
