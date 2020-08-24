import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnotfoundComponent } from './compnotfound.component';

describe('CompnotfoundComponent', () => {
  let component: CompnotfoundComponent;
  let fixture: ComponentFixture<CompnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
