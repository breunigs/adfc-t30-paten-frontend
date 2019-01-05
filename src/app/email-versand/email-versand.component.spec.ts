import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVersandComponent } from './email-versand.component';

describe('EmailVersandComponent', () => {
  let component: EmailVersandComponent;
  let fixture: ComponentFixture<EmailVersandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVersandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVersandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
