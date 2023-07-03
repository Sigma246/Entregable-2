import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionService } from './auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private SessionService: SessionService, private router: Router) { };
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any {
    
            let isLoggedIn = this.SessionService.isAuthenticated();
            if (isLoggedIn) {
                return true
            }else{
                this.router.navigate(['login']);
            }
        }

}