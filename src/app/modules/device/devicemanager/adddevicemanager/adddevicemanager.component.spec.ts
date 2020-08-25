import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicemanagerComponent } from './adddevicemanager.component';

describe('AdddevicemanagerComponent', () => {
  let component: AdddevicemanagerComponent;
  let fixture: ComponentFixture<AdddevicemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
