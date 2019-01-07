import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T30patenComponent } from './t30paten.component';

describe('T30patenComponent', () => {
  let component: T30patenComponent;
  let fixture: ComponentFixture<T30patenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [T30patenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T30patenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
