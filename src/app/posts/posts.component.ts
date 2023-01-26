import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../service/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  title: string = 'Post List';
  posts: Post[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void {
    //initializing components with some data
    this.posts = this.postService.getPosts();
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p=> p.id !== post.id)
  }
}
