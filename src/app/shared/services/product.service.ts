import { Product } from 'shared/model/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireList } from '@angular/fire/database/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsRefV: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase) {
    this.productsRefV = this.productsRef;
  }

  getMapProduct() {
    return this.productsRefV.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key,...c.payload.val() }))  
      )
    )
  }

  create(product: NgForm) {
    return this.db.list('/product').push(product);
  }

  update(productId: string, product: NgForm) {
    return this.db.object('/product/'+ productId).update(product);
  }

  delete(productId: string) {
    return this.db.object('/product/'+ productId).remove();
  }

  get products() {
    return this.db.list('/product').valueChanges() as Observable<Product[]>;
  }

  get productsRef(){
    return this.db.list('/product');
  }

  getProduct(productId: string) : AngularFireObject<Product> {
    return this.db.object('/product/' + productId);
  }

}
