
import { ShoppingCart } from 'shared/model/shopping-cart';
import { Component, Input } from '@angular/core';
import { Product } from 'shared/model/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product!: Product;
  @Input('shopping-cart') shoppingCart!: ShoppingCart;
  @Input('remove') remove: boolean = false;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  removeAll() {
    this.cartService.removeAll(this.product);
  }

  

}
