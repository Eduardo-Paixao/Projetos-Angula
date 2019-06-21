import { TestBed } from '@angular/core/testing';

import { AcudesService } from './acudes.service';

describe('AcudesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcudesService = TestBed.get(AcudesService);
    expect(service).toBeTruthy();
  });
});
