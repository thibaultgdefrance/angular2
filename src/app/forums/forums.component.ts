import { Component, OnInit } from '@angular/core';
import{Forum}from '../Forums';
import { Observable } from 'rxjs';
import{ForumService} from '../forum.service';
@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  listeForums:Forum[]
  constructor(private forumService:ForumService) {

  }
  getForums():void{
    this.forumService.getForums().subscribe(listeForums=>this.listeForums=listeForums);
    
  }
  ngOnInit() {
    this.getForums();
  }

}
