import { Injectable } from '@angular/core' // define servicios y luego los inyecta en cualquier otra clase
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { User } from '../models/user';

@Injectable()
export class UserService{
  public url:string;
  public identity;
  public token;
  constructor(public _http:HttpClient){
    this.url = GLOBAL.url;
  }

  register(user: User):Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-type','application/json');

    return this._http.post(this.url+'register',params,{headers:headers});
  }

  singup(user:User,gettoken = null):Observable<any>{
    if(gettoken!= null){
      user.gettoken = gettoken;
    }

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'login',params,{headers:headers});
  }

  getIdentity(){
    //Se parcea el objeto que viene como string a Json
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined")
    {
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;
  }
}
