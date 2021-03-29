import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = {} as User;


  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  saveUser(form: NgForm){
    this.userService.saveUser(this.user).subscribe(()=>{
      this.cleanForm(form);
    })
  }

  cleanForm(form: NgForm){
    form.resetForm();
    this.user = {} as User;
    this.router.navigate(["/"]);
  }



}
