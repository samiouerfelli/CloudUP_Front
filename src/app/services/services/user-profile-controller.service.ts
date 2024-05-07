/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addUserProfile } from '../fn/user-profile-controller/add-user-profile';
import { AddUserProfile$Params } from '../fn/user-profile-controller/add-user-profile';
import { deleteUserProfile } from '../fn/user-profile-controller/delete-user-profile';
import { DeleteUserProfile$Params } from '../fn/user-profile-controller/delete-user-profile';
import { getUserProfile } from '../fn/user-profile-controller/get-user-profile';
import { GetUserProfile$Params } from '../fn/user-profile-controller/get-user-profile';
import { updateEvenement } from '../fn/user-profile-controller/update-evenement';
import { UpdateEvenement$Params } from '../fn/user-profile-controller/update-evenement';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvenement()` */
  static readonly UpdateEvenementPath = '/auth/profile/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvenement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement$Response(params: UpdateEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvenement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement(params: UpdateEvenement$Params, context?: HttpContext): Observable<User> {
    return this.updateEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `addUserProfile()` */
  static readonly AddUserProfilePath = '/auth/profile/addP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUserProfile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUserProfile$Response(params: AddUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUserProfile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUserProfile(params: AddUserProfile$Params, context?: HttpContext): Observable<string> {
    return this.addUserProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getUserProfile()` */
  static readonly GetUserProfilePath = '/auth/profile/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile$Response(params: GetUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile(params: GetUserProfile$Params, context?: HttpContext): Observable<User> {
    return this.getUserProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `deleteUserProfile()` */
  static readonly DeleteUserProfilePath = '/auth/profile/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserProfile$Response(params: DeleteUserProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteUserProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserProfile(params: DeleteUserProfile$Params, context?: HttpContext): Observable<string> {
    return this.deleteUserProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
