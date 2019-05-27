import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmeldenAskComponent } from './abmelden-ask.component';

describe('AbmeldenAskComponent', () => {
  let component: AbmeldenAskComponent;
  let fixture: ComponentFixture<AbmeldenAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmeldenAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmeldenAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
