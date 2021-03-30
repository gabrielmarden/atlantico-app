import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url: string = `${environment.apiUrl}/email`

  constructor(private htttpClient: HttpClient) { }

  send(email: Email){
    return this.htttpClient.post<Email>(this.url,email);
  }

}
