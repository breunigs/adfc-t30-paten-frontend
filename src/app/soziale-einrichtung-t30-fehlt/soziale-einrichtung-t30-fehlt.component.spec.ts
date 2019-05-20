import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungT30FehltComponent } from './soziale-einrichtung-t30-fehlt.component';

describe('SozialeEinrichtungT30FehltComponent', () => {
  let component: SozialeEinrichtungT30FehltComponent;
  let fixture: ComponentFixture<SozialeEinrichtungT30FehltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungT30FehltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungT30FehltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
