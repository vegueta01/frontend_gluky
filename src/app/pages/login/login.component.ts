import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() logoutButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() loginButton: EventEmitter<void> = new EventEmitter<void>();
  user: SocialUser;
  constructor(public authService: AuthService) {
  }
  ngOnInit() { }
  login(): void {
    this.authService.login().then(() => {
      this.loginButton.emit();
    });
  }
  logout() {
    this.authService.logout().then(() => {
      this.logoutButton.emit();
    });
  }
}
