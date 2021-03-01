import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CardValueInterface, FormValueInterface } from 'src/app/core/models/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BlogPostService } from 'src/app/services/blog-post/blog-post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardList: CardValueInterface[] = [];
  formValues: Subject<FormValueInterface> = new Subject<FormValueInterface>();
  constructor(
    public authService: AuthService,
    private blogPostService: BlogPostService,
    ) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if(user) {
        const user = this.authService.getUserData();
        this.blogPostService.getPosts(user.id).subscribe((data) => {
          this.cardList = data.posts;          
        });
      } else {
        this.cardList = [];
      }
    })
  }

  onSubmit(formValue: FormValueInterface) {
    if (!!this.authService.user) {
        this.pushData(formValue);
    } else {
      this.authService.login().then(() => {
        this.pushData(formValue);
      });
    }
  }  

  async pushData(formValue: FormValueInterface) {

    try {
      let post_id = "";
      if(!!formValue.postId) {
        post_id = (await this.blogPostService.updatePost(formValue).toPromise()).post_id;
        const elementOfList = {};
        delete Object.assign(elementOfList, formValue, {post_id: post_id })["postId"];
        this.cardList[this.cardList.findIndex(card => card.post_id === post_id)] = { state: 'pending', ...elementOfList as CardValueInterface};
      } else {
        post_id = (await this.blogPostService.insertPost(formValue).toPromise()).post_id;  
        const elementOfList = {};
        delete Object.assign(elementOfList, formValue, {post_id: post_id })["postId"];
        this.cardList.push({ state: 'pending', ...elementOfList as CardValueInterface});
      }
      this.resetFormValues();
      return;
    } catch (error) {
      console.error(error);
    }
  }

  resetFormValues() {
    this.formValues.next({
      title: null,
      body: null,
      postId: null,
    })
  }

  editButton(event) {
    this.formValues.next(event);
  }

  async deleteButton(event: FormValueInterface) {
    await this.blogPostService.deletePost(event).toPromise();
    this.cardList = this.cardList.filter((item) => {
      return item.post_id != event.postId;
    });
    this.resetFormValues();
  }

  logoutEvent(){
    this.resetFormValues();
  }
  loginEvent(){
    this.resetFormValues();
  }
}
