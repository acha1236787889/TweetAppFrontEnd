import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { UpdateTweet } from '../update-tweet';

@Component({
  selector: 'app-update-tweet',
  templateUrl: './update-tweet.component.html',
  styleUrls: ['./update-tweet.component.css']
})
export class UpdateTweetComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  updatetweet:UpdateTweet=new UpdateTweet();
  k:number=0;
  ngOnInit(): void {
  }
  form = new FormGroup({  
    username : new FormControl('' ),  
    tweetMessagetoBeUpdated:new FormControl(''),
    tweetmessage : new FormControl('')  
    
  });  
  updatetweetmessage(){
this.updatetweet=this.form.value;
this.registrationService.updatetweet(this.updatetweet.username,this.updatetweet).subscribe(()=>{
  this.k=1;
  console.log("Success");
},()=>{
  this.k=2;
  console.log("Failure"
  );
})
  }

}
