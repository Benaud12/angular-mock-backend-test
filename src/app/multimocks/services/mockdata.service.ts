import { Injectable } from '@angular/core';
import { Request, Response, ResponseOptions } from '@angular/http';

console.log(process.env.npm_package_version);
console.log(process.env.npm_package_config_bee);
console.log(process.env);
console.log(process);
let filePath = require('../../../../package.json');
console.log(filePath);
let mockData = require('../../../../e2e/mocks/stuff.json');

let appRoot = require('app-root-path');

// let reqRoot = require('app-root-path');
// let mystuff = appRoot.require('../e2e/mocks/stuff.json');

// console.log('filename: ', appRoot);
// console.log('my stuff: ', mystuff);
let path = require('path');

console.log('path: ', path);

console.log('filename: ', __filename);
console.log('directory: ', __dirname);

let fs = require('fs');

@Injectable()
export class MockdataService {

  constructor() { }

  getResponse(request: Request): Response {
    const options = new ResponseOptions({body: {
      stuff: mockData.stuff
    }});
    return new Response(options);
  }
}
