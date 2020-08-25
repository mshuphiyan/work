import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevicemanagerComponent } from './editdevicemanager.component';

describe('EditdevicemanagerComponent', () => {
  let component: EditdevicemanagerComponent;
  let fixture: ComponentFixture<EditdevicemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevicemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevicemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
