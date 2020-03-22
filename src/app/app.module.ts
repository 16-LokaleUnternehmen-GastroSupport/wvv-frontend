import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import {AuthService} from './services/auth.service';
import {BasicAuthInterceptor} from './services/basic-auth.interceptor';

import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFullpageModule,
    InlineSVGModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  zip: string;
}
