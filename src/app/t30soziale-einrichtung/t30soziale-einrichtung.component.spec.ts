import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T30sozaleEinrichtungComponent } from './t30sozale-einrichtung.component';

describe('T30sozaleEinrichtungComponent', () => {
  let component: T30sozaleEinrichtungComponent;
  let fixture: ComponentFixture<T30sozaleEinrichtungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T30sozaleEinrichtungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T30sozaleEinrichtungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
