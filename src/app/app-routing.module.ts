import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReplyTweetComponent } from './reply-tweet/reply-tweet.component';
import { UpdateTweet } from './update-tweet';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component';
import { ViewTweetComponent } from './view-tweet/view-tweet.component';

const routes: Routes = [
  { path: 'view-login', component: LoginComponent },  
  { path: 'add-registration', component: RegistrationComponent },  
  {path:'add-tweet', component:AddTweetComponent},
  {path:'view-tweet',component:ViewTweetComponent},
  {path:'update-tweet',component:UpdateTweetComponent},
  {path:'reply-tweet',component:ReplyTweetComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'registration-details',component:RegistrationDetailsComponent},
  {path:'view-logout',component:LogOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
