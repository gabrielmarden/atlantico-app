import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiUrl}/user`;

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<User[]>(this.url);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.url+'/'+id);
  }

  saveUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.url,user);
  }

  updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(this.url+'/'+user.id,JSON.stringify(user));
  }

  deleteUser(user: User):Observable<User>{
    return this.httpClient.delete<User>(this.url+'/'+user.id);
  }
}
