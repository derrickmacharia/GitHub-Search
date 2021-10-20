import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataresponseService } from '../services/dataresponse.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {

  @ViewChild('x') searchRepoForm : NgForm

  profRepo : string;
  repoGet ;

  showUserRepo(){
    this.profRepo = this.searchRepoForm.value.derrick;
    console.log(this.profRepo);

    this.requestUsername.getRepoSearch(this.profRepo).then(
    (Response)=>{
      this.repoGet = this.requestUsername.userRepositories;
      console.log(this.repoGet);
    },
    (error)=>{
      console.log(error);
    }
    )
  }
  constructor(private requestUsername : DataresponseService) { }

  ngOnInit(): void {
  }

}
