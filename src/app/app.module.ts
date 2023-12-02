import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { ViewTweetComponent } from './view-tweet/view-tweet.component';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component';
import { ReplyTweetComponent } from './reply-tweet/reply-tweet.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AddTweetComponent,
    ViewTweetComponent,
    UpdateTweetComponent,
    ReplyTweetComponent,
    ForgotPasswordComponent,
    RegistrationDetailsComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
