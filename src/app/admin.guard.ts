import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { AuthService } from './core/service/auth/auth.service'
@Injectable({
  providedIn: 'root'
})

//Guardian que nos va a permitir restringir la entrada a una dirección en 
//específico.
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLogin().pipe(
      map(user => user === null ? false : true)
    );
  }
  
}
