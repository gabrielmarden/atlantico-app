import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private router:Router,private auth:AuthService){}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
        const currentUser = this.auth.currentUserValue;
        if(currentUser){
            return true;
        }
        this.router.navigate(['/login'],{queryParams:{returnURL:state.url}});
        return false;
    }
}