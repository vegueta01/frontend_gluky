import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoudComponent } from './layoud.component';

describe('LayoudComponent', () => {
  let component: LayoudComponent;
  let fixture: ComponentFixture<LayoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
