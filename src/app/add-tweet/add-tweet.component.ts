import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { Tweet } from '../tweet';
import { Tweet1 } from '../tweet1';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  arr:Array<String>;
  arr1:Array<String>;
  tweet:Tweet=new Tweet();
  tweet1:Tweet1=new Tweet1();
  b:number=0;
  ngOnInit(): void {
  }
  form = new FormGroup({  
    username : new FormControl('' ),  
    tweetmessage : new FormControl('')  ,
    like : new FormControl('' ),  
    reply : new FormControl('')  
  });  
  
  postmessage(){
    this.tweet=this.form.value;
    
    this.registrationService.postnewTweet(this.tweet).subscribe(()=>{
      console.log("Success");
      this.b=1;
      console.log(this.tweet.tweetmessage);
    },()=>{
      console.log(this.tweet.tweetmessage);
      console.log(this.tweet);
      this.b=2;
        console.log("Failed");
    })
  }


}
