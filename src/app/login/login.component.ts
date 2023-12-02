import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService,private router:Router) { }
  login:Login=new Login();
  
  show:boolean=false;
  l=false;
  k:number=0;
  ngOnInit(): void {
    this.l=false;
  }
  form = new FormGroup({  
    username : new FormControl('' ),  
    password : new FormControl('')  
  });  

  logininformation(){
    this.login=this.form.value;
    this.registrationService.login2(this.login).subscribe((result)=>{
           this.show=true;
           this.k=1;
           this.router.navigate(['/add-tweet']);
           console.log("Success");
    },()=>{
      this.show=false;
      this.k=2;
      console.log("Register first");
      console.log(this.login.username);
    })
  }

}
