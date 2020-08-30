import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { DefaultModule } from './layouts/default/default.module';
import { DialogModule } from './core/dialog/dialog.module';
import { UserprofileModule } from './modules/admin/userprofile/userprofile.module';
import { AboutModule } from './shared/about/about.module';

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
    LoginModule,
    DefaultModule,
    DialogModule,
    AboutModule,
    UserprofileModule,
    SocialLoginModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('devices', reducers)
  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            'clientId'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('clientId'),
        },
        {
          id: AmazonLoginProvider.PROVIDER_ID,
          provider: new AmazonLoginProvider(
            'clientId'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
