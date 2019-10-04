import { Component, OnInit, Input } from '@angular/core';
import{Forum} from '../Forums';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../forum.service';
import { Message } from '../message';
@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.component.html',
  styleUrls: ['./detail-forum.component.css']
})
export class DetailForumComponent implements OnInit {
  @Input() forum:Forum;
  messagesForum:Message[];
  constructor( private route: ActivatedRoute,
    private forumService: ForumService) { }

  ngOnInit() {
   this.getForum()
  }
  getForum():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.forumService.getForum(id)
      .subscribe(forum => this.forum = forum);
    this.forumService.getMessagesForum(id).subscribe(messagesForum=>this.messagesForum=messagesForum);
  }
}