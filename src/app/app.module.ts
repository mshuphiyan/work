import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultModule } from './layouts/default/default.module';
import { DialogModule } from './core/dialog/dialog.module';
import { UserprofileModule } from './modules/admin/userprofile/userprofile.module';

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
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    DefaultModule,
    DialogModule,
    UserprofileModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('devices', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
