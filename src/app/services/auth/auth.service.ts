import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { storageKeys } from './models/storage-keys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: SocialUser;
  GoogleLoginProvider = GoogleLoginProvider;
  constructor(private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
      if(user){
        sessionStorage.setItem(storageKeys.TOKEN, user.idToken);
        sessionStorage.setItem(storageKeys.USER_DATA, this.criptMock(user));
      }
    });
   }
  login(): Promise<SocialUser> {
    return  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logout() {
    this.socialAuthService.signOut();
    sessionStorage.removeItem(storageKeys.TOKEN);
    sessionStorage.removeItem(storageKeys.USER_DATA); 
  }

  criptMock(user: SocialUser): string {
    return btoa(JSON.stringify(user))
  }

  decriptMock(user: string): string {
   return atob(user)
  }
}
