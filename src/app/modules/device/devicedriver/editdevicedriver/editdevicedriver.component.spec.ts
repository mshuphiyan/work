import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevicedriverComponent } from './editdevicedriver.component';

describe('EditdevicedriverComponent', () => {
  let component: EditdevicedriverComponent;
  let fixture: ComponentFixture<EditdevicedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevicedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevicedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
