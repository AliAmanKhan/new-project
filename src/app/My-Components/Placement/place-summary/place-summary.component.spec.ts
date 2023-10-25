import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSummaryComponent } from './place-summary.component';

describe('PlaceSummaryComponent', () => {
  let component: PlaceSummaryComponent;
  let fixture: ComponentFixture<PlaceSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceSummaryComponent]
    });
    fixture = TestBed.createComponent(PlaceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
