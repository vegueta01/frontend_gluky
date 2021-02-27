import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { LoginComponent } from './login.component';
import { LoginComponentModule } from './login.component.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // declarations: [ LoginComponent ]
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login have been called', () => {
    spyOn(component.authService, "login");
    component.login();
    expect(component.authService.login).toHaveBeenCalled();
  });
  it('should login have been called', () => {
    spyOn(component.authService, "logout");
    component.logout();
    expect(component.authService.logout).toHaveBeenCalled();
  });
});
