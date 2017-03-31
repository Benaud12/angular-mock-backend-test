import { NgModule } from '@angular/core';
import {
  BOOTSTRAP,
  DECLARATIONS,
  IMPORTS,
  PROVIDERS
} from './app.dependencies';

import { XHRBackend } from '@angular/http';
import { MultimocksModule, MultimocksService } from './multimocks';

IMPORTS.push(MultimocksModule)
PROVIDERS.push({
  provide: XHRBackend,
  useClass: MultimocksService
});

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS,
  bootstrap: BOOTSTRAP
})
export class TestAppModule { }
