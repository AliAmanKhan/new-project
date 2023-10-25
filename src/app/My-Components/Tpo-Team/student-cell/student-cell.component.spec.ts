import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCellComponent } from './student-cell.component';

describe('StudentCellComponent', () => {
  let component: StudentCellComponent;
  let fixture: ComponentFixture<StudentCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCellComponent]
    });
    fixture = TestBed.createComponent(StudentCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
