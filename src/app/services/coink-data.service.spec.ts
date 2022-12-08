import { TestBed } from '@angular/core/testing';

import { CoinkDataService } from './coink-data.service';

describe('CoinkDataService', () => {
  let service: CoinkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
