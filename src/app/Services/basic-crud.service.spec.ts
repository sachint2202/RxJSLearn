import { TestBed } from '@angular/core/testing';

import { BasicCrudService } from './basic-crud.service';

describe('BasicCrudService', () => {
  let service: BasicCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
