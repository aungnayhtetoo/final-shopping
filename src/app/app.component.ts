import { UserService } from 'shared/services/user.service';
import { Router } from '@angular/router';
import { LoginAuthService } from 'shared/services/login-auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  userSub: Subscription;

  constructor(private auth: LoginAuthService, router: Router, private us: UserService) {
    this.userSub = auth.$user.subscribe(user => {
      if(user) {
        us.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl) {
          router.navigateByUrl(returnUrl);
          localStorage.removeItem('returnUrl');
        }
      }
    })
  }
  
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
