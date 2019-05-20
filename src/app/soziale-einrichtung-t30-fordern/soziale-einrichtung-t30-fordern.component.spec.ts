import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungT30FordernComponent } from './soziale-einrichtung-t30-fordern.component';

describe('SozialeEinrichtungT30FordernComponent', () => {
  let component: SozialeEinrichtungT30FordernComponent;
  let fixture: ComponentFixture<SozialeEinrichtungT30FordernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungT30FordernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungT30FordernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
