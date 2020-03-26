import { TestBed } from '@angular/core/testing';

import { RespApiService } from './resp-api.service';

describe('RespApiService', () => {
  let service: RespApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
