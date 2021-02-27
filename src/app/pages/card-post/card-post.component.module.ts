import { NgModule } from '@angular/core';
import { CardPostComponent } from './card-post.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardPostComponent],
  imports: [MatCardModule],
  exports: [CardPostComponent],
})
export class CardPostComponenttModule { }
