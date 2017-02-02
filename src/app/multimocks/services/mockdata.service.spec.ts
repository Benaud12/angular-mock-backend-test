/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockdataService } from './mockdata.service';

describe('MockdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockdataService]
    });
  });

  it('should create', inject([MockdataService], (service: MockdataService) => {
    expect(service).toBeTruthy();
  }));
});
