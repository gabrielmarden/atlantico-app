import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserAuthenticated } from 'src/app/models/userAuthenticated';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  users: User[] | undefined;
  user: UserAuthenticated |undefined ;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsers().pipe(first()).subscribe(users=>{
        this.loading = false;
        this.users = users;
        this.user = this.authService.currentUserValue;
    });
  }

  editUser(user: User){}

  deleteUser(user: User){}

  sendMessage(user: User){}

}
