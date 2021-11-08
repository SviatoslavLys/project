import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TodayComponent } from './today/today.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent, TodayComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }