import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser!: User;

  constructor(private router: Router, private auth: AuthService){
    this.auth.currentUser.subscribe(u=>this.currentUser = u);
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
