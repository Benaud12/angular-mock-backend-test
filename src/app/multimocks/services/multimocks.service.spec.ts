/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MultimocksService } from './multimocks.service';
import { Request, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MockdataService } from './mockdata.service';

describe('MultimocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MultimocksService,
        MockdataService
      ]
    });
  });

  it('should create', async(inject([MultimocksService], (service: MultimocksService) => {
    // Assert
    expect(service).toBeTruthy();
  })));

  it('should extend MockBackend', async(inject([MultimocksService], (service: MultimocksService) => {
    // Assert
    expect(service instanceof MockBackend).toBe(true);
  })));

  describe('createConnection', () => {
    let testRequest;

    beforeEach(() => {
      testRequest = new Request(new RequestOptions());
    });

    it('should create and return a new MockConnection with the given request',
      async(inject([MultimocksService], (service: MultimocksService) => {
        // Act
        const result = service.createConnection(testRequest);

        // Assert
        expect(result instanceof MockConnection).toBe(true);
        expect(result.request).toBe(testRequest);
      })));

    it('should add the MockConnection as the next connection',
      async(inject([MultimocksService], (service: MultimocksService) => {
        // Arrange
        spyOn(service.connections, 'next')

        // Act
        const connection = service.createConnection(testRequest);

        // Assert
        expect(service.connections.next).toHaveBeenCalledWith(connection);
      })));

    it('should set up the mock response from the mock data service',
      async(inject([MultimocksService], (service: MultimocksService) => {
        // Arrange
        let expectedResponse;
        const options = new ResponseOptions({body: 'things'});
        const response = new Response(options);
        spyOn(service.mockdataService, 'getResponse').and.returnValue(response);

        // Act
        service.createConnection(testRequest).response.subscribe(
          (res) => { expectedResponse = res.text() });

        // Asset
        expect(service.mockdataService.getResponse)
          .toHaveBeenCalledWith(testRequest);
        expect(expectedResponse).toEqual('things');
      })));
  });
});
