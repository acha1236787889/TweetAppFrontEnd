import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registration } from '../registration';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  register:Registration=new Registration();
  show:boolean=false;
  form = new FormGroup({  
    login_id:new FormControl(''),
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    cnf_password:new FormControl(''),
    contact_number:new FormControl('')
  });  

  ngOnInit(): void {
  }
  registration(){
    this.register=this.form.value;
    this.registrationService.doRegister(this.register).subscribe((result)=>{
      this.show=true;
      console.log("Sccessfully Register");
    },()=>{
      console.log("Failed");
    })
  }

}
