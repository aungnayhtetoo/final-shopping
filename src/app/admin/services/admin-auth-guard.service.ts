import { UserService } from 'shared/services/user.service';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate{

  constructor(private userService: UserService, private auth: LoginAuthService, router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin)
    )
  }


}
