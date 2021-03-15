import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup ;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private auth:AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      if(this.auth.currentUserValue){
        this.router.navigate(['/']);
      }
    }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/';
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }
    
  }


}
