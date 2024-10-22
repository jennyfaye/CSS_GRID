import { TestBed } from '@angular/core/testing';

import { FruitlistService } from './fruitlist.service';

describe('FruitlistService', () => {
  let service: FruitlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
