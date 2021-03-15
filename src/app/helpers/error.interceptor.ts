import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    
    constructor(private auth: AuthService){}

    intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request).pipe(catchError(err => {
            if(err.status===401){
                this.auth.logout();
                location.reload(true);
            }
            const error = err.error.message ||err.statusText;
            return throwError(error);
        }))
    }
}