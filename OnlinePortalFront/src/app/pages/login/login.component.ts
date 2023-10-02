import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  };
  constructor(private snack:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }
  submitForm(){
    console.log("login form submitted");
if(this.loginData.username.trim()=='' || this.loginData.username==null){
this.snack.open('User name is required','',{
  duration:2000
});
return;
}
if(this.loginData.password.trim()=='' || this.loginData.password==null){
  this.snack.open('Password name is required','',{
    duration:2000
  });
  return;
  }    
  //request server to generate token
  this.login.generateToken(this.loginData).subscribe(
    (data:any)=>{
      this.snack.open('Success','',{
        duration:2000
      });
      console.log(data);
      this.login.loginUser(data.token);
      this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.login.setUserDetail(user);
        console.log(user);
        //redirect to admin or normal dashboard
        if(this.login.getUserRole()=="ADMIN"){
//admin dashboard
           window.location.href='/admin-dashboard';
        }
        else if(this.login.getUserRole()=="NORMAL"){
//normal user dashnoard
window.location.href='/user-dashboard/0'; //here /o is default for loading all the quizes on user dashboard which is a default value
        }
        else{
          this.login.logout();
        }
      }
      )
    },
(error)=>{
  this.snack.open('Something went Wrong !!','',{
    duration:2000
  });
}
);
  }
}
