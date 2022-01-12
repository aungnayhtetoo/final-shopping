import { CategoryService } from 'shared/services/category.service';
import { Component, Input } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input('category') category!: string;
  categoryRef: AngularFireList<any>;
  categories$: Observable<any[]>;

  constructor(categoryService: CategoryService) { 
    this.categoryRef = categoryService.categoriesRef;
    this.categories$ = this.categoryRef.snapshotChanges().pipe(
      map(change=>
        change.map(c => ({key: c.payload.key,...c.payload.val()
        }))
      )
    )
  }
}
