/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { ReclamationControllerService } from './services/reclamation-controller.service';
import { CommentaryRestControllerService } from './services/commentary-rest-controller.service';
import { PublicationRestControllerService } from './services/publication-rest-controller.service';
import { CoursControllerService } from './services/cours-controller.service';
import { ReactionControllerService } from './services/reaction-controller.service';
import { UserProfileControllerService } from './services/user-profile-controller.service';
import { EvenementControllerService } from './services/evenement-controller.service';
import { CategorieEvenementControllerService } from './services/categorie-evenement-controller.service';
import { MessageControllerService } from './services/message-controller.service';
import { AuthentificationService } from './services/authentification.service';
import { OtpControllerService } from './services/otp-controller.service';
import { ReservationControllerService } from './services/reservation-controller.service';
import { UserRestControllerService } from './services/user-rest-controller.service';
import { SlotsControllerService } from './services/slots-controller.service';
import { ForumRestControllerService } from './services/forum-rest-controller.service';
import { AuthentificationGithubControllerService } from './services/authentification-github-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ReclamationControllerService,
    CommentaryRestControllerService,
    PublicationRestControllerService,
    CoursControllerService,
    ReactionControllerService,
    UserProfileControllerService,
    EvenementControllerService,
    CategorieEvenementControllerService,
    MessageControllerService,
    AuthentificationService,
    OtpControllerService,
    ReservationControllerService,
    UserRestControllerService,
    SlotsControllerService,
    ForumRestControllerService,
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
