import { TestBed } from '@angular/core/testing';

import { DeeIconsRegistry } from './dee-icons-registry.service';

describe('DeeIconsService', () => {
  let service: DeeIconsRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeeIconsRegistry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
