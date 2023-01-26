import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
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
}
