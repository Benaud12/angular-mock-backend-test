import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Provider, Type, ModuleWithProviders } from '@angular/core'
import { AppComponent } from './app.component';

export const DECLARATIONS: Array<Type<any> | any[]> = [
  AppComponent
]

export const IMPORTS: Array<Type<any> | ModuleWithProviders | any[]> = [
  BrowserModule,
  FormsModule,
  HttpModule
];

export const PROVIDERS: Provider[] = []

export const BOOTSTRAP: Array<Type<any> | any[]> = [
  AppComponent
];
