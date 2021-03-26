import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private auth: AuthService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let currentUser = this.auth.currentUserValue;
        if(currentUser && currentUser.jwttoken){
            console.log('OK')
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${currentUser.jwttoken}`
                }
            })

            console.log(request);
        }
        return next.handle(request);
    }

}