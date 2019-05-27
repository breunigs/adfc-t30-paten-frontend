import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialeEinrichtungsKarteComponent } from './soziale-einrichtungs-karte.component';

describe('SozialeEinrichtungsKarteComponent', () => {
  let component: SozialeEinrichtungsKarteComponent;
  let fixture: ComponentFixture<SozialeEinrichtungsKarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozialeEinrichtungsKarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozialeEinrichtungsKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
