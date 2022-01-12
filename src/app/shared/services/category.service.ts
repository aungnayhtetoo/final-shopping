import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { 

  }

  get categoriesRef() {
    //return this.db.list('/category/gender', ref => ref.orderByKey());
    return this.db.list('/food', ref => ref.orderByChild('name'));
  }

  get categories(){
    //console.log(this.db.list('/category/gender/men').valueChanges());
    return this.db.list('/category/gender').valueChanges();
  }
}
