import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Registration } from '../registration';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  detail:string;
  reg:Registration=new Registration();
  ngOnInit(): void {
  }
  form = new FormGroup({  
    username : new FormControl('' )  
  });  
  finduser(){
    this.detail=this.form.value.username;
    console.log(this.detail);
    this.registrationService.registerdetails(this.detail);
    
  }
}
