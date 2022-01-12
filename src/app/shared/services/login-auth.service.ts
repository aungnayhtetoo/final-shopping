import { AppUser } from 'shared/model/app-user';
import firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { UserService } from 'shared/services/user.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  $user!: Observable<firebase.User | null>;
  userData: any;
  userLoggedIn: boolean = false;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {     
    this.$user = afAuth.authState;
    this.$user.subscribe(user => {
      if (user) {
        this.userLoggedIn = true;
        console.log("User logged in", this.userLoggedIn);       
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        this.userLoggedIn = false;
        console.log("User logged in", this.userLoggedIn);
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }

  // okay to new this class since it is about the implementation/integration details.
  // will not/cannot be unit tested.
  get user$() {
    //console.log(this.$user);
    return this.$user;
  }

  // method to return the database User object
  // get appUser$() : Observable<AppUser> {
  //   return this.$user.pipe(
  //     switchMap(user => {
  //       if(user) return this.userService.get(user.uid)

  //       return EMPTY;
  //     }
  //   )
  //   )
      
  // }

  async getName() {
    let name = JSON.parse(localStorage.getItem('user') as string);
    if (name) return name.displayName;
    return '';
  }

  get appUser$() : Observable<AppUser | null> {
    // let userItem = localStorage.getItem('user');
    
    // if(userItem === 'null'){
    //   console.log(localStorage.getItem('user'));
    //   return of();
      
    // }
    return this.$user.pipe(
      switchMap(user => (user ? this.userService.get(user.uid) as  Observable<AppUser> 
      : of(null))
    ))
      
    
  }

  
  //return of(null);)
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      // .then(success => {
      //   console.log('reached');
      //   this.router.navigate([returnUrl]);
      // });
  }

  logout() {
    this.afAuth.signOut();
  }
}
