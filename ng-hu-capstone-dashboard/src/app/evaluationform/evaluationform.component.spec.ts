import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationformComponent } from './evaluationform.component';

describe('EvaluationformComponent', () => {
  let component: EvaluationformComponent;
  let fixture: ComponentFixture<EvaluationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
