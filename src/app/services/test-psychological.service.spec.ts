import { TestBed } from '@angular/core/testing';

import { TestPsychologicalService } from './test-psychological.service';

describe('TestPsychologicalService', () => {
  let service: TestPsychologicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestPsychologicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
