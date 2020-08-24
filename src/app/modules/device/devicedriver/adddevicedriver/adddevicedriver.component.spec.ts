import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicedriverComponent } from './adddevicedriver.component';

describe('AdddevicedriverComponent', () => {
  let component: AdddevicedriverComponent;
  let fixture: ComponentFixture<AdddevicedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
