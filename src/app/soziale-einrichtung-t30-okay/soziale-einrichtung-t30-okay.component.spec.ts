import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungT30OkayComponent } from './soziale-einrichtung-t30-okay.component';

describe('SozialeEinrichtungT30OkayComponent', () => {
  let component: SozialeEinrichtungT30OkayComponent;
  let fixture: ComponentFixture<SozialeEinrichtungT30OkayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungT30OkayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungT30OkayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
