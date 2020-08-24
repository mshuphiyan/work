import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultModule } from './layouts/default/default.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { UserComponent } from './modules/admin/user/user.component';
import { UsersettingsComponent } from './modules/admin/usersettings/usersettings.component';
import { UserprofileComponent } from './modules/admin/userprofile/userprofile.component';
import { MortalityanalyticsComponent } from './modules/analytics/mortalityanalytics/mortalityanalytics.component';
import { BatchpredictionComponent } from './modules/analytics/batchprediction/batchprediction.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersettingsComponent,
    UserprofileComponent,
    MortalityanalyticsComponent,
    BatchpredictionComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    DefaultModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('devices', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
