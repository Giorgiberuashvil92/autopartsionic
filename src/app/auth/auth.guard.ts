import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
// import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanLoad{
  constructor(private router: Router,
              private authService: AuthService) {}

async canLoad(): Promise<boolean> {
  if (this.authService.getToken()){
    return true;
  } else {
    return true;
  }
}

}
// tslint:disable-next-line:only-arrow-functions
setTimeout( () => {

}, 2000);


