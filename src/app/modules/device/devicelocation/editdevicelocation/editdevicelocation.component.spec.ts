import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdevicelocationComponent } from './editdevicelocation.component';

describe('EditdevicelocationComponent', () => {
  let component: EditdevicelocationComponent;
  let fixture: ComponentFixture<EditdevicelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdevicelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdevicelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
