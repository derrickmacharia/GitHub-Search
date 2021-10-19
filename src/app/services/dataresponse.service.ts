import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../gitusers/user';
import { Repos } from '../gitusers/repos';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class DataresponseService {
  userDetails: User;
  userRepositories:  Repos;

  constructor(private http: HttpClient) {
    this.userDetails = new User(
      "",
      "",
      "",
      "",
      "",
      0,
      0,
      0,
      new Date(),
    );
    this.userRepositories = new Repos('','','',new Date());
  }
  
  getUserSearch(gitUser) {
    interface ApiResponse{
      name: string,
      login: string,
      avatar_url: string,
      bio: string,
      html_url: string,
      public_repos: number,
      followers: number,
      following: number,
      created_at: Date,
    }

    let userPromise = new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + '/' + gitUser + '??access_token=' + environment.apiToken).toPromise().then((Response)=>{
        this.userDetails = Response;
        resolve()
        console.log()
      },(error)=>{
        reject(error);
        console.log (error)
      })
    })
    return userPromise
  }

    getRepoSearch(gitUser) {
      interface ApiResponse{
         name: string,
         html_url: string,
         description: string,
         created_at: Date,
      }
  
      let repoPromise = new Promise<void>((resolve, reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl + '/' + gitUser + '/repos?sort=created&direction=desc??access_token=' + environment.apiToken).toPromise().then((Response)=>{
          this.userRepositories = Response;
          resolve()
          console.log()
        },(error)=>{
          reject(error);
          console.log (error)
        })
        
        
      })
      return repoPromise




  }
}
