/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { CoursControllerService } from './services/cours-controller.service';
import { OtpControllerService } from './services/otp-controller.service';
import { PaypalControllerService } from './services/paypal-controller.service';
import { AuthentificationService } from './services/authentification.service';
import { SlotsControllerService } from './services/slots-controller.service';
import { ReservationControllerService } from './services/reservation-controller.service';
import { AuthentificationGithubControllerService } from './services/authentification-github-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    CoursControllerService,
    OtpControllerService,
    PaypalControllerService,
    AuthentificationService,
    SlotsControllerService,
    ReservationControllerService,
    AuthentificationGithubControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
