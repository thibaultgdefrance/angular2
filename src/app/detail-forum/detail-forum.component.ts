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
  message:Message=new Message();
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
  ajoutMessage(formData):void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.message.TexteMessage=formData.textePost;
    this.message.IdMessage="";
    this.message.DatePublication="";
    this.message.Popularite="";
    this.message.CheminAvatar="";
    this.message.IdAuteur="1";
    this.forumService.postMessage(id);
  }
}