import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortalityanalyticsComponent } from './mortalityanalytics.component';

describe('MortalityanalyticsComponent', () => {
  let component: MortalityanalyticsComponent;
  let fixture: ComponentFixture<MortalityanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortalityanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortalityanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
