import { NgModule } from '@angular/core';


import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  exports: [
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ]
})
export class FirebaseComponentsModule { }
