import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenBestaetigungComponent } from './token-bestaetigung.component';

describe('TokenBestaetigungComponent', () => {
  let component: TokenBestaetigungComponent;
  let fixture: ComponentFixture<TokenBestaetigungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenBestaetigungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenBestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
