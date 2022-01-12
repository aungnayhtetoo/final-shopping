
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'admin-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: any;
  categoryRef: AngularFireList<any>;
  categories: Observable<any[]>;
  product: any = {};
  id: string | null;

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
      
    this.categoryRef = this.categoryService.categoriesRef;
    this.categories = this.categoryRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key,...c.payload.val() }))  
      )
    )
    this.categories$ = categoryService.categories;

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.productService.getProduct(this.id).valueChanges().pipe(take(1))
      .subscribe(product => this.product = product);      
    }


    
  }

  create(product: NgForm) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
    console.log(product);
  }

  delete() {
    if(!confirm("Are you sure you want to delete the product?")) return;

    this.productService.delete(this.id as string);
    this.router.navigate(['/admin/products']);   
  }



  

}
