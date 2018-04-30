/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@tlslaj0417/auth';
import { NbEmailPassAuthProvider, NbAuthModule } from '@tlslaj0417/auth';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:8080',
            login: {
              endpoint: '/api/auth/login',
              method: 'post',
              headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: {
                success: '/pages',
                failure: null,
              },
              defaultErrors: ['Unable to login, please try again.'],
              defaultMessages: ['You have been successfully logged in.'],
            },
            logout: {
              endpoint: '/api/auth/logout',
              method: 'get',
              redirect: {
                success: '/',
                failure: null,
              },
            },
          },
        },
      },
      forms: {},
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },AuthGuard
  ],
})
export class AppModule {
}
