import { Injectable } from '@angular/core';
import {Forum} from './Forums';
import { ForumsComponent } from './forums/forums.component';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Message} from './message';
@Injectable({
  providedIn: 'root'
})
export class ForumService {
  getForums():Observable<Forum[]>{
    
    return this.http.get<Forum[]>("http://10.115.145.6/api/Forums?crunch=true");
    //return this.http.get<Forum[]>("http://api.forum.reseaudentreprise.com/api/Fora");
  }
  getForum(id:number):Observable<Forum>{
    return this.http.get<Forum>("http://10.115.145.6/api/Forums?id="+id)
  }
  getMessagesForum(id:number):Observable<Message[]>{
    return this.http.get<Message[]>("http://10.115.145.6/api/Messages?IdForum="+id+"&sandwich=true")
  }
  constructor(private http: HttpClient) { 
    
  }
}
