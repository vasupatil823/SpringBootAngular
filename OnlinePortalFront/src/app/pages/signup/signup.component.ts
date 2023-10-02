import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
username:'',
password:'',
firstName:'',
lastName:'',
email:'',
phone:''
  };

  constructor(private userService:UserService,private snack:MatSnackBar) {

   }

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.username=='' || this.user.username==null) {
this.snack.open('username should not be null !!','',{duration:2000});
return;
    }
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
//success
console.log(data);
Swal.fire('User Registered Successfully !!',' with id :' +data.id,'success');
      },
      (error)=>{
//error
console.log(error)
//alert('something went wrong');
this.snack.open('Something went wrong !!','',{duration:2000});
      }
    )
  }
}
