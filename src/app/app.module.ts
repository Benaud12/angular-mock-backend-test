import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MultimocksModule, MultimocksService } from './multimocks';

const appImports = [
  BrowserModule,
  FormsModule,
  HttpModule
];

const appProviders = [];

if (environment.mocked === true) {
  appImports.push(MultimocksModule);

  appProviders.push({
    provide: XHRBackend,
    useClass: MultimocksService
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: appImports,
  providers: appProviders,
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
