import { NgModule } from '@angular/core';
import { CardPostComponent } from './card-post.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardPostComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CardPostComponent],
})
export class CardPostComponenttModule { }
