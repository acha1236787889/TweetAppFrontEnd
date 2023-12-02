import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Tweet } from './tweet';
import { Tweet1 } from './tweet1';
import { map } from 'rxjs/operators';
import { Registration } from './registration';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private baseUrl='http://ec2-52-88-196-133.us-west-2.compute.amazonaws.com:8081/api/v1.0/tweets';


  constructor(private http:HttpClient) { }
  user:string;
  login2(login: object): Observable<object>{
      return this.http.post(`${this.baseUrl}`+'/login', login,{responseType:'text'as 'json'}); 
  }
  doRegister(register:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/register',register,{responseType:'text'as 'json'});
  }
  postnewTweet(tweet1:object):Observable<object>{
    return this.http.post(`${this.baseUrl}`,tweet1,{responseType:'text'as 'json'});
  }
  viewtweet():Observable<Tweet[]>{
    return this.http.get<Tweet[]>((`${this.baseUrl}`+'/username')).pipe(
      map(response=>response)
    )
  }
  updatetweet(username:string,updatetweet:object):Observable<any>{
      return this.http.put(`${this.baseUrl}`+'/'+encodeURIComponent(username)+'/update',updatetweet,{responseType:'text'as 'json'});
  }
  replytweet(reply:object):Observable<any>{
    return this.http.post(`${this.baseUrl}`+'/reply',reply,{responseType:'text'as 'json'});
  }
  liketweet(username:string){
    return this.http.put(`${this.baseUrl}`+'/'+encodeURIComponent(username)+'/like',{responseType:'text'as 'string'});
  }

  forgotpassword(username:string,forgot:object):Observable<any>{
    return this.http.put(`${this.baseUrl}`+'/'+encodeURIComponent(username)+'/forgot',forgot,{responseType:'text'as 'json'});
  }

  registerdetails(username:string):Observable<Registration>{
    const options = {
      params: new HttpParams().set('username', username)
    };
    return this.http.get<Registration>(`${this.baseUrl}/user/search/${username}`,options);
  }
  logout(){
    console.log("sd");
    return this.http.get(`${this.baseUrl}`+'/logut');
  }
  delete(username:string){
    return this.http.delete(`${this.baseUrl}`+'/'+encodeURIComponent(username)+'/delete',{responseType:'text'as 'json'});
  }
 

}
