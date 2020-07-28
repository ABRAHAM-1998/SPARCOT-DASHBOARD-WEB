import { TestBed } from '@angular/core/testing';

import { ApicallservService } from './apicallserv.service';

describe('ApicallservService', () => {
  let service: ApicallservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicallservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
