import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardValueInterface, FormValueInterface, PostDataBaseInterface } from 'src/app/core/models/forms';


// "117765855097600494647"
// "101080263286219561143"
// "112311472695180464303"
const posts: PostDataBaseInterface[] = [
  {
    post_id: "1",
    title: "My first post",
    body: "In this post, I will ...",
    state: "pending",
    user_id: "112311472695180464303"
  },
  {
    post_id: "2",
    title: "My second post",
    body: "In this post, I will ...",
    state: "published",
    user_id: "112311472695180464303"
  },
  {
    post_id: "3",
    title: "My third post",
    body: "In this post, I will ...",
    state: "rejected",
    user_id: "112311472695180464303"
  },
  {
    post_id: "4",
    title: "My 4th post",
    body: "In this post, I will ...",
    state: "pending",
    user_id: "112311472695180464303"
  },
  {
    post_id: "5",
    title: "My 5th post",
    body: "In this post, I will ...",
    state: "published",
    user_id: "101080263286219561143"
  },
  {
    post_id: "6",
    title: "My 6th post",
    body: "In this post, I will ...",
    state: "rejected",
    user_id: "101080263286219561143"
  },
  {
    post_id: "7",
    title: "My 7th post",
    body: "In this post, I will ...",
    state: "pending",
    user_id: "112311472695180464303"
  },
  {
    post_id: "8",
    title: "My 8th post",
    body: "In this post, I will ...",
    state: "published",
    user_id: "101080263286219561143"
  },
  {
    post_id: "9",
    title: "My 9th post",
    body: "In this post, I will ...",
    state: "rejected",
    user_id: "112311472695180464303"
  },
  {
    post_id: "10",
    title: "My 10th post",
    body: "In this post, I will ...",
    state: "pending",
    user_id: "112311472695180464303"
  },
  {
    post_id: "11",
    title: "My 11th post",
    body: "In this post, I will ...",
    state: "published",
    user_id: "112311472695180464303"
  },
  {
    post_id: "12",
    title: "My 12th post",
    body: "In this post, I will ...",
    state: "rejected",
    user_id: "112311472695180464303"
  }
]

const dataPosts = {
  posts
}
let postId = 0;

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {


  constructor() { }

  getPosts(userId: string): Observable<{ posts: CardValueInterface[]; }> {
    const filter: CardValueInterface[] = dataPosts.posts
      .filter(post => post.user_id === userId || post.state === "published")
      .map(post => ({
        post_id: post.post_id,
        title: post.title,
        body: post.body,
        state: post.state
      }))
      // .sortBy([{a:"b"},{a:"c"},{a:"a"}], function(i) {return i.a.toLowerCase()})
      .sort((a, b) => a.state.localeCompare(b.state))
      .reverse();
    const response = {
      posts: filter
    }
    return of(response);
  }

  insertPost(formValue: FormValueInterface) {
    postId++;
    return of({post_id: "POS" + postId});
  }
  updatePost(formValue: FormValueInterface) {
    return of({post_id: formValue.postId});
  }

  deletePost(formValue: FormValueInterface) {
    return of({post_id: formValue.postId});
  }
}
