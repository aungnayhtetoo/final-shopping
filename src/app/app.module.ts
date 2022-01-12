import { CoreModule } from './core/core.module';
import { ShoppingModule } from './shopping/shopping.module';

import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { RouterModule } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment.prod';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
    ]),

  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
