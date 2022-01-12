import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'shared/model/app-user';
import { ShoppingCart } from 'shared/model/shopping-cart';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bs-navbar',
  templateUrl: './nav-bar-bootstrap.component.html',
  styleUrls: ['./nav-bar-bootstrap.component.css']
})
export class NavBarBootstrapComponent implements OnInit{

  appUser!: AppUser | null;
  loggedIn!: boolean;
  cart$!: Observable<ShoppingCart>

  constructor(private auth: LoginAuthService, private shoppingCartService: ShoppingCartService) {
    
    
    //this.user = firebase.default.auth().currentUser;
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(user => (user)? (this.appUser = user, this.loggedIn = true) : (this.appUser = new AppUser, this.loggedIn = false));
    this.cart$ = (await this.shoppingCartService.getCart()) as Observable<ShoppingCart>;

  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }

}
