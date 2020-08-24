import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevicelocationComponent } from './adddevicelocation.component';

describe('AdddevicelocationComponent', () => {
  let component: AdddevicelocationComponent;
  let fixture: ComponentFixture<AdddevicelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddevicelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevicelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
