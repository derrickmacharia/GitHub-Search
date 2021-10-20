import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataresponseService } from '../services/dataresponse.service';
import { User } from '../gitusers/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('d') searchUserForm: NgForm
  
  userProfile : string;
  userOne : User;

  showUserProfile = false;

  searchingUser(){
    this.userProfile = this.searchUserForm.value.search;
    console.log(this.userProfile); 
    this.requestUsername.getUserSearch(
      this.userProfile).then
      ((Response)=>{
        this.userOne = this.requestUsername.userDetails;
        console.log(this.userOne);
      },
      (error)=>{
        console.log(error);
      });
      this.showUserProfile = true;
  }

  constructor(private requestUsername:DataresponseService) { }

  ngOnInit(): void {
  }

}
