import { DataTablesModule } from 'angular-datatables';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutCardComponent } from './components/check-out-card/check-out-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AuthGuard } from './services/auth-guard.service';
import { CategoryService } from './services/category.service';
import { LoginAuthService } from './services/login-auth.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { MatComponentModule } from 'src/app/module/mat-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseComponentsModule } from '../module/firebase-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    CheckOutCardComponent,
    ShippingAddressComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatComponentModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FirebaseComponentsModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CheckOutCardComponent,
    ShippingAddressComponent,
    BrowserModule,
    CommonModule,
    MatComponentModule,
    FormsModule,
    CustomFormsModule,
    DataTablesModule,
    NgbModule,
    BrowserAnimationsModule,
    FirebaseComponentsModule,
    FontAwesomeModule,
  ],

  providers: [
    LoginAuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ]
})
export class SharedModule { }
