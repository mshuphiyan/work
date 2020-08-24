import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultModule } from './layouts/default/default.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';


@NgModule({
  declarations: [
    AppComponent,

  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('devices', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
