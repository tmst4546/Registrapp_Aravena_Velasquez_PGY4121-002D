import { TestBed } from '@angular/core/testing';

import { ApiferiadosService } from './apiferiados.service';

describe('ApiferiadosService', () => {
  let service: ApiferiadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiferiadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
