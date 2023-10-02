import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  //generate token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData)
  }
  //get the current user
public getCurrentUser(){
  return this.http.get(`${baseUrl}/current-user`)
}


  //login user : set the token in local storage
  public loginUser(token: string){
    localStorage.setItem("token",token);
    return true;
  }
  //is login : user is login or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr==''||tokenStr==null){
return false
    }
    else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout(){ 
    console.log('logout function called.....')
    localStorage.clear();
    return true;
  }

  //get the token
  public getToken(){
    return localStorage.getItem("token");
  }
  //store user details in local storage
  public setUserDetail(user: any){
localStorage.setItem("user", JSON.stringify(user));
  }

  //get the user from local storage
  public getUserDetails(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
return JSON.parse(userStr);
    }
    else{
      this.logout;
      return userStr;
    }
  }
  //get the user role
  public getUserRole(){
    let user = this.getUserDetails();
    return user.authorities[0].authority;
  }
}
