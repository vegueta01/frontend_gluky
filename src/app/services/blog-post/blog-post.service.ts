import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardValueInterface, FormValueInterface, PostDataBaseInterface } from 'src/app/core/models/forms';
import { AuthService } from '../auth/auth.service';
import { storageKeys } from '../auth/models/storage-keys';

const posts: PostDataBaseInterface[] = [
  {
    post_id: '1',
    title: 'My first post',
    body: 'In this post, I will ...',
    state: 'pending',
    user_id: '112311472695180464303'
  },
  {
    post_id: '2',
    title: 'My second post',
    body: 'In this post, I will ...',
    state: 'published',
    user_id: '112311472695180464303'
  },
  {
    post_id: '3',
    title: 'My third post',
    body: 'In this post, I will ...',
    state: 'rejected',
    user_id: '112311472695180464303'
  },
  {
    post_id: '4',
    title: 'My 4th post',
    body: 'In this post, I will ...',
    state: 'pending',
    user_id: '112311472695180464303'
  },
  {
    post_id: '5',
    title: 'My 5th post',
    body: 'In this post, I will ...',
    state: 'published',
    user_id: '101080263286219561143'
  },
  {
    post_id: '6',
    title: 'My 6th post',
    body: 'In this post, I will ...',
    state: 'rejected',
    user_id: '101080263286219561143'
  },
  {
    post_id: '7',
    title: 'My 7th post',
    body: 'In this post, I will ...',
    state: 'pending',
    user_id: '112311472695180464303'
  },
  {
    post_id: '8',
    title: 'My 8th post',
    body: 'In this post, I will ...',
    state: 'published',
    user_id: '101080263286219561143'
  },
  {
    post_id: '9',
    title: 'My 9th post',
    body: 'In this post, I will ...',
    state: 'rejected',
    user_id: '112311472695180464303'
  },
  {
    post_id: '10',
    title: 'My 10th post',
    body: 'In this post, I will ...',
    state: 'pending',
    user_id: '112311472695180464303'
  },
  {
    post_id: '11',
    title: 'My 11th post',
    body: 'In this post, I will ...',
    state: 'published',
    user_id: '112311472695180464303'
  },
  {
    post_id: '12',
    title: 'My 12th post',
    body: 'In this post, I will ...',
    state: 'rejected',
    user_id: '112311472695180464303'
  }
];

const dataPosts = {
  posts
};
@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  databaseMock: { posts: PostDataBaseInterface[]};

  constructor(public authService: AuthService) {
    if (localStorage.getItem(storageKeys.DATABASE_MOCK)) {
      this.databaseMock = JSON.parse(localStorage.getItem(storageKeys.DATABASE_MOCK)) as {posts: PostDataBaseInterface[]};
    } else {
      localStorage.setItem(storageKeys.DATABASE_MOCK, JSON.stringify(dataPosts));
      this.databaseMock = dataPosts;
    }
  }

  getPosts(userId: string): Observable<{ posts: CardValueInterface[]; }> {
    const filter: CardValueInterface[] = this.databaseMock.posts
      .filter(post => post.user_id === userId || post.state === 'published')
      .map(post => ({
        post_id: post.post_id,
        title: post.title,
        body: post.body,
        state: post.state
      }))
      .sort((a, b) => a.state.localeCompare(b.state))
      .reverse();
    const response = {
      posts: filter
    };
    return of(response);
  }

  insertPost(formValue: FormValueInterface) {
    const item: PostDataBaseInterface = {
      body: formValue.body,
      state: 'pending',
      post_id: Date.now().toString(),
      title: formValue.title,
      user_id: this.authService.getUserData().id,
    };
    this.databaseMock.posts.push(item);
    this.setDatabaseMock();
    return of({post_id: item.post_id});
  }
  updatePost(formValue: FormValueInterface) {
    const item: PostDataBaseInterface = {
      body: formValue.body,
      state: 'pending',
      post_id: formValue.postId,
      title: formValue.title,
      user_id: this.authService.getUserData().id,
    };
    this.databaseMock.posts[
      this.databaseMock.posts.findIndex(post => post.post_id === formValue.postId)
    ] = item;
    this.setDatabaseMock();
    return of({post_id: formValue.postId});
  }

  deletePost(formValue: FormValueInterface) {
    this.databaseMock.posts = this.databaseMock.posts.filter((item) => {
      return item.post_id !== formValue.postId;
    });
    this.setDatabaseMock();
    return of({post_id: formValue.postId});
  }

  setDatabaseMock() {
    localStorage.setItem(storageKeys.DATABASE_MOCK, JSON.stringify(this.databaseMock));
  }
}
