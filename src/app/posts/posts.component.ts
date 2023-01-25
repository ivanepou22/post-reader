import { Component } from '@angular/core';
import { Post } from '../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title: string = 'Post List';
  posts: Post[] = [];

  constructor(){}

  ngOnInit(): void {
    //initializing components with some data
    this.posts = [
      {
        id: 1,
        title: 'First Post',
        body: 'Test',
        votes: 1
      },
      {
        id: 2,
        title: 'Test 2',
        body: 'Test 2',
        votes: 10
      },
      {
        id: 3,
        title: 'Test 3',
        body: 'Test 3',
        votes: 10
      }
    ]
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p=> p.id !== post.id)
  }
}
