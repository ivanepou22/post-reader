import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
 @Input() post: Post;
 @Output() hidePost: EventEmitter<Post> = new EventEmitter;

 constructor() {
  this.post = {
    id : 1,
        title : '',
        body : '',
        votes : 0
  }
 }

 upvote(post: Post) {
  post.votes += 1;
  return post;
 }

 downvote(post: Post) {
  post.votes -= 1;
  return post;
 }

 hide(post: Post): void {
  this.hidePost.emit(post);
 }

}
