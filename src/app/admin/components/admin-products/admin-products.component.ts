
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'shared/model/product';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  
  //created an array to keep track of all the products, client side.
  datatableElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {}
  dtTrigger: Subject<any> = new Subject<any>()
  
  product$!: Observable<Product[]>;
  productArr!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getMapProduct()
    this.product$.subscribe(products => {
      this.productArr = products

      this.dtTrigger.next();
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,

    }
  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

  }

  filter(query: string) {
    // this.filterProducts = (query) ?
    //   this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    //   this.products;
  }



}
