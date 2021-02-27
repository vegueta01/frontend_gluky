import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [LoginComponent],
})
export class LoginComponentModule { }
