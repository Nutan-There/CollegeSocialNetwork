import { TestBed } from '@angular/core/testing';

import { PlacementNewService } from './placement-new.service';

describe('PlacementNewService', () => {
  let service: PlacementNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
