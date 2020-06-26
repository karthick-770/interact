import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import {map} from 'rxjs/operators';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: LoginService,private router:Router,private user: UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.auth.isLoggedIn)
      { return true;}
  else{
        return this.user.isLoggedIn().pipe(map(res =>{
        if(res.status){
          this.auth.setLogggedIn(true);
          return true;
        } 
        else
        {this.router.navigateByUrl('/home');
          return false;
        }
      })) ;
      
    }
  }
  
}
