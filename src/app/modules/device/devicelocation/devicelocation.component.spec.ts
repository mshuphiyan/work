import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicelocationComponent } from './devicelocation.component';

describe('DevicelocationComponent', () => {
  let component: DevicelocationComponent;
  let fixture: ComponentFixture<DevicelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
