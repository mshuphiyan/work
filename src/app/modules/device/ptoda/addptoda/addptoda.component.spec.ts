import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddptodaComponent } from './addptoda.component';

describe('AddptodaComponent', () => {
  let component: AddptodaComponent;
  let fixture: ComponentFixture<AddptodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddptodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddptodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
