import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isAdmin: boolean = true;

  constructor(private userService: UserService, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.loading = true;
    this.userService.getUsers().pipe(first()).subscribe(users=>{
        this.loading = false;
        this.user = this.authService.currentUserValue;
        this.isAdmin = this.user.admin;
        this.users = users.filter(u=>u.email!=this.user?.email);
    });
  }

  editUser(user: User){
    this.router.navigateByUrl('/form',{state:user});
  }

  deleteUser(user: User){
    this.userService.deleteUser(user).subscribe(()=>{
      this.getUser();
    })
  }

  sendMessage(user: User){
    this.router.navigate(['/email/'+user.email]);
  }

  newUser(){
    this.router.navigate(['/form']);
  }

}
