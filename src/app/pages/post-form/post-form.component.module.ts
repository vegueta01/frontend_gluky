import { NgModule } from '@angular/core';
import { PostFormComponent } from './post-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [PostFormComponent],
})
export class PostFormComponentModule { }
