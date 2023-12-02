import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  
  ngOnInit(): void {
    this.logout1();
  }

  logout1(){
    this.registrationService.logout();
  }

}
