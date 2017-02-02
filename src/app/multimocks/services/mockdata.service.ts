import { Injectable } from '@angular/core';
import { Request, Response, ResponseOptions } from '@angular/http';

@Injectable()
export class MockdataService {

  constructor() { }

  getResponse(request: Request): Response {
    const options = new ResponseOptions({body: {
      stuff: 'MOCKED RESPONSE BITCHES!'
    }});
    return new Response(options);
  }
}
