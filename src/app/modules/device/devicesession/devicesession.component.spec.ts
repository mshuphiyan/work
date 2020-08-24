import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesessionComponent } from './devicesession.component';

describe('DevicesessionComponent', () => {
  let component: DevicesessionComponent;
  let fixture: ComponentFixture<DevicesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
