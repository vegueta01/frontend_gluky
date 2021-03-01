import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { storageKeys } from './models/storage-keys';
import { UserInterface } from './models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: SocialUser;
  authState: Observable<SocialUser>
  GoogleLoginProvider = GoogleLoginProvider;
  constructor(private socialAuthService: SocialAuthService) {
    this.authState = this.socialAuthService.authState;
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
      if (user){
        sessionStorage.setItem(storageKeys.TOKEN, user.idToken);
        sessionStorage.setItem(storageKeys.USER_DATA, this.criptMock(user));
      }
    });
   }
  login(): Promise<SocialUser> {
    return  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logout() {
    sessionStorage.removeItem(storageKeys.TOKEN);
    sessionStorage.removeItem(storageKeys.USER_DATA);
    return this.socialAuthService.signOut();
  }

  criptMock(user: SocialUser): string {
    return btoa(JSON.stringify(user));
  }

  decriptMock(user: string): string {
   return atob(user);
  }

  getUserData(): UserInterface{
    if (this.user){
      return JSON.parse(this.decriptMock(sessionStorage.getItem(storageKeys.USER_DATA))) as UserInterface;
    } else {
      return null;
    }
  }
}
