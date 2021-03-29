import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserAuthenticated } from '../models/userAuthenticated';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<UserAuthenticated>;
  public currentUser: Observable<UserAuthenticated>;

  constructor(private http:HttpClient){
    this.currentUserSubject = new BehaviorSubject<UserAuthenticated>(JSON.parse(localStorage.getItem('currentUser')||'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserAuthenticated{
    return this.currentUserSubject.value;
  }

  login(username: string,password: string){
    return this.http.post<UserAuthenticated>(`${environment.apiUrl}/authenticate`,{username,password})
        .pipe(map(user=>{
          localStorage.setItem('currentUser',JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }))
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next({} as UserAuthenticated);
  }

}
