import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtodaComponent } from './ptoda.component';

describe('PtodaComponent', () => {
  let component: PtodaComponent;
  let fixture: ComponentFixture<PtodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
