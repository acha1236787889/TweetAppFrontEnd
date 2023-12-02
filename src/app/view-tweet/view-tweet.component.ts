import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-view-tweet',
  templateUrl: './view-tweet.component.html',
  styleUrls: ['./view-tweet.component.css']
})
export class ViewTweetComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  
  tweet1:Tweet[]=[];
 
  ngOnInit(): void {
    this.viewmessage()
  }
  
  
  viewmessage(){
    this.registrationService.viewtweet().subscribe(
      data=>this.tweet1=data
    )
  }

}
