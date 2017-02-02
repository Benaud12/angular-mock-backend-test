import { Injectable } from '@angular/core';
import { Request } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MockdataService } from './mockdata.service';

@Injectable()
export class MultimocksService extends MockBackend {

  mockdataService: MockdataService;

  constructor(mockdataService: MockdataService) {
    super();
    this.mockdataService = mockdataService;
  }

  createConnection(request: Request): MockConnection {
    const connection = new MockConnection(request);
    const response = this.mockdataService.getResponse(request);
    connection.mockRespond(response);
    this.connections.next(connection);
    return connection;
  }
}
