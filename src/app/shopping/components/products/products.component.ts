import { ShoppingCart } from 'shared/model/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/model/product';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit{

  cart$!: Observable<ShoppingCart>;
  subscription!: Subscription;
  isProgressVisible = false;

  products: Product[] = [];
  filteredProduct: Product[] = [];

  category!: string;

  constructor(private shoppingCartService: ShoppingCartService, private route: ActivatedRoute, private productService: ProductService) {  
    
  }
  

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProduct();
  }

  private applyFilter() {
    this.filteredProduct = (this.category) ?
    this.products.filter(p => p.category === this.category) :
    this.products;
    this.isProgressVisible = false;
  }

  private populateProduct() {
    this.isProgressVisible = true;
    this.productService.getMapProduct().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category') as string;
      this.applyFilter();
      }
    )    
  }
    

   
      
}
