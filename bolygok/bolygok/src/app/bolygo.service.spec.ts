import { TestBed } from '@angular/core/testing';

import { BolygoService } from './bolygo.service';

describe('BolygoService', () => {
  let service: BolygoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolygoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
