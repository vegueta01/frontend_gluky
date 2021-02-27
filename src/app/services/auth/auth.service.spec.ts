import { TestBed } from '@angular/core/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule, SocialUser } from 'angularx-social-login';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe("AuthService 1", () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocialLoginModule],
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: true,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  environment.client_id
                )
              }
            ],
          } as SocialAuthServiceConfig,

        },
        {
          provide: SocialAuthService,
          useValue:
            {
              signIn: () => {},
              signOut: () => {},
              authState: of(null)
            }
        }
        
      ]
    });
    service = TestBed.inject(AuthService);
  });
    
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should be logged in', () => {
      service.login();
      expect(service.user).toEqual(null) ;
    });
});

describe('AuthService 2', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocialLoginModule],
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: true,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  environment.client_id
                )
              }
            ],
          } as SocialAuthServiceConfig,

        },
        {
          provide: SocialAuthService,
          useValue:
            {
              signIn: () => {},
              signOut: () => {},
              authState: of({})
            }
        }
        
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should be logged', () => {
    spyOn(service["socialAuthService"], "signIn")
    service.login();
    expect(service["socialAuthService"].signIn).toHaveBeenCalled();
  });

  it('should be offline', () => {
    spyOn(service["socialAuthService"], "signOut")
    service.logout();
    expect(service["socialAuthService"].signOut).toHaveBeenCalled();
  });
  it('should encript ', () => {
    const user  = {email: "felipe.buitrago.betancourt@gmail.com", name: "felipe buitrago"} as SocialUser;
    expect(service.criptMock(user)).toEqual(jasmine.any(String));
  });
  it('should decript ', () => {
    const criptUser = "eyJlbWFpbCI6ImZlbGlwZS5idWl0cmFnby5iZXRhbmNvdXJ0QGdtYWlsLmNvbSIsIm5hbWUiOiJmZWxpcGUgYnVpdHJhZ28ifQ==";
    expect(service.decriptMock(criptUser)).toEqual(jasmine.any(String));
  });
});
