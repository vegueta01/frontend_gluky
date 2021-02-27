import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  constructor(public authService: AuthService) {
  }
  ngOnInit() { } 
  login(): void {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
