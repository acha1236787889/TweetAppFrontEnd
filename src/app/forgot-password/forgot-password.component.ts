import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgotPassword } from '../forgot-password';
import { Login } from '../login';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  forgot:ForgotPassword=new ForgotPassword();
  login:Login=new Login();
  flag:number=0;
  ngOnInit(): void {
  }
  form = new FormGroup({  
    newPassword : new FormControl('')  ,
    
  });  
 forgotpassword(){
  this.forgot=this.form.value;
  this.flag=1;
  this.registrationService.forgotpassword(this.forgot.newPassword,this.forgot).subscribe(()=>{
    console.log("Success");
  },()=>{
    this.flag=2;
    console.log("Failure");
  })
 }
}
