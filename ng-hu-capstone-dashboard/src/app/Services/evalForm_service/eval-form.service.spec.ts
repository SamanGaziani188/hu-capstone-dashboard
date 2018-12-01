import { TestBed, inject } from '@angular/core/testing';

import { EvalFormService } from './eval-form.service';

describe('EvalFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvalFormService]
    });
  });

  it('should be created', inject([EvalFormService], (service: EvalFormService) => {
    expect(service).toBeTruthy();
  }));
});
