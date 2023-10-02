import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public login:LoginService) { }

  ngOnInit(): void {

    //when this component calls, first this method will be called, so to load initilly any user information that needs to be used to view , we can use here
   //this.user=this.login.getUserDetails();
  }

}
