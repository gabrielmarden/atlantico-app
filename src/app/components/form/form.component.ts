import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = {} as User;
  isNew: boolean = false;
  constructor(
    private userService: UserService,
    private router:Router,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = history.state;
    if(this.user.login==null) this.isNew = true;
  }

  saveUser(form: NgForm){
    if(this.user.id){
      this.userService.updateUser(this.user).subscribe(()=>{
        this.cleanForm(form);
      })
    }else{
    this.userService.saveUser(this.user).subscribe(()=>{
      this.cleanForm(form);
    })
    }
  }

  cleanForm(form: NgForm){
    form.resetForm();
    this.user = {} as User;
    this.router.navigate(["/"]);
  }


}
