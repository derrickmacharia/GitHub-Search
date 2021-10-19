import { Component, OnInit } from '@angular/core';
import { User } from './../gitusers/user';
import { DataresponseService } from '../services/dataresponse.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username!: User;
  repositories!: any;

  constructor(private requestUsername : DataresponseService) { }

  getUsers(gitUser){
    this.requestUsername.getUserSearch(gitUser).then(
      (Response)=>{
        this.username = this.requestUsername.userDetails;
        console.log(this.username);

      },
      (error)=>{
        console.log(error);
      }
    );
  }

  getRepo(gitUser){
    this.requestUsername.getRepoSearch(gitUser).then(
      (Response)=>{
        this.repositories = this.requestUsername.userRepositories;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.getUsers("derrickmacharia")
    this.getRepo("derrickmacharia")
  }

}
