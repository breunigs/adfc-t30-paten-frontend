import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozEinrButtonsComponent } from './soz-einr-buttons.component';

describe('SozEinrButtonsComponent', () => {
  let component: SozEinrButtonsComponent;
  let fixture: ComponentFixture<SozEinrButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozEinrButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozEinrButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
