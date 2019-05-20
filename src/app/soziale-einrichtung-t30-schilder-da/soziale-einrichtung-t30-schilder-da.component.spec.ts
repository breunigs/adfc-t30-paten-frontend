import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungT30SchilderDaComponent } from './soziale-einrichtung-t30-schilder-da.component';

describe('SozialeEinrichtungT30SchilderDaComponent', () => {
  let component: SozialeEinrichtungT30SchilderDaComponent;
  let fixture: ComponentFixture<SozialeEinrichtungT30SchilderDaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungT30SchilderDaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungT30SchilderDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
