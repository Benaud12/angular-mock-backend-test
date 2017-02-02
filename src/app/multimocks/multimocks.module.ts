import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultimocksService, MockdataService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    MockdataService,
    MultimocksService
  ],
  declarations: []
})
export class MultimocksModule { }
