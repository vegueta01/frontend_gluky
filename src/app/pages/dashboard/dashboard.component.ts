import { Component, OnInit } from '@angular/core';
import { FormValueInterface } from 'src/app/core/models/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardList = [];
  constructor(public authService: AuthService) { }
  ngOnInit(): void {}

  onSubmit(formValue: FormValueInterface) {    
    if(!!this.authService.user) {
      this.cardList.push(formValue);
    } else {
      this.authService.login().then(()=> {
        this.cardList.push(formValue);
      });
    }
  }
}
