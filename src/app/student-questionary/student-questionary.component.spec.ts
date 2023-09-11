import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuestionaryComponent } from './student-questionary.component';

describe('StudentQuestionaryComponent', () => {
  let component: StudentQuestionaryComponent;
  let fixture: ComponentFixture<StudentQuestionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuestionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuestionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
