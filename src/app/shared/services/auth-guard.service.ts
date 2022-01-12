import { LoginAuthService } from 'shared/services/login-auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth: LoginAuthService, private router: Router) { }
  // console.log('can activate working')
  // if(this.auth.user) {console.log('return is true'); return true;}
  // this.router.navigate(['login'])
  // console.log('return is false');
  // return false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    

    
    if(this.auth.isLoggedIn !== true) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url} })
    }
    return true;
  }
}

 

