import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchpredictionComponent } from './batchprediction.component';

describe('BatchpredictionComponent', () => {
  let component: BatchpredictionComponent;
  let fixture: ComponentFixture<BatchpredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchpredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchpredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
