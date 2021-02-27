import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CardPostComponenttModule } from '../card-post/card-post.component.module';
import { CommonModule } from '@angular/common';
import { PostFormComponentModule } from '../post-form/post-form.component.module';
import { LoginComponentModule } from '../login/login.component.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CardPostComponenttModule,
    PostFormComponentModule,
    LoginComponentModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardComponentModule { }
