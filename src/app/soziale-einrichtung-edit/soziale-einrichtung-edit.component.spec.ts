import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungEditComponent } from './soziale-einrichtung-edit.component';

describe('SozialeEinrichtungEditComponent', () => {
  let component: SozialeEinrichtungEditComponent;
  let fixture: ComponentFixture<SozialeEinrichtungEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
