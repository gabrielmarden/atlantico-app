import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from 'src/app/models/email';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {



  email: Email = {} as Email;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.email.destination = params['destination'];
    })
  }

  sendMessage(form: NgForm){
    //this.email.sender = this.authService.currentUserValue.email;
    console.log(this.email);
    /*this.emailService.send(this.email).subscribe(()=>{
      this.cleanForm(form); 
    })*/
  }

  cleanForm(form: NgForm){
    form.resetForm();
    this.email = {} as Email;
    this.router.navigate(["/"]);
  }

}
