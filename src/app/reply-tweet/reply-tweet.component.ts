import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from '../registration-service.service';
import { ReplyTweet } from '../reply-tweet';

@Component({
  selector: 'app-reply-tweet',
  templateUrl: './reply-tweet.component.html',
  styleUrls: ['./reply-tweet.component.css']
})
export class ReplyTweetComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService) { }
  reply:ReplyTweet=new ReplyTweet();
  ngOnInit(): void {
  }
  k:number=0;
  form = new FormGroup({  
    username : new FormControl('' ),  
    reply : new FormControl('')  ,
    tweetmessage:new FormControl('')
  });  
  replytweet(){
    this.reply=this.form.value;
    this.registrationService.replytweet(this.reply).subscribe(()=>{
      console.log("Success");
      this.k=1;
    },()=>{
      console.log("Failure");
      this.k=2;
    }
    )
  }
  liketweet(){
    this.reply=this.form.value;
    this.registrationService.liketweet(this.reply.username).subscribe(()=>{
      console.log("Success");
    
      
    },()=>{
      this.k=3;
      console.log("Failure");
      console.log(this.reply.username);

    })
  }
  deletetweet(){
    this.reply=this.form.value;
    this.registrationService.delete(this.reply.username).subscribe(()=>{
      this.k=4;
      console.log("success");
    },()=>{
      this.k=5;
      console.log("failure");
    })
  }

}
