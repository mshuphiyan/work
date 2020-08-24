import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicedriverComponent } from './devicedriver.component';

describe('DevicedriverComponent', () => {
  let component: DevicedriverComponent;
  let fixture: ComponentFixture<DevicedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
