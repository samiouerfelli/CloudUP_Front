/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAward } from '../fn/user-profile-controller/add-award';
import { AddAward$Params } from '../fn/user-profile-controller/add-award';
import { addE } from '../fn/user-profile-controller/add-e';
import { AddE$Params } from '../fn/user-profile-controller/add-e';
import { addS } from '../fn/user-profile-controller/add-s';
import { AddS$Params } from '../fn/user-profile-controller/add-s';
import { addUserProfile } from '../fn/user-profile-controller/add-user-profile';
import { AddUserProfile$Params } from '../fn/user-profile-controller/add-user-profile';
import { Award } from '../models/award';
import { deleteUserProfile } from '../fn/user-profile-controller/delete-user-profile';
import { DeleteUserProfile$Params } from '../fn/user-profile-controller/delete-user-profile';
import { Education } from '../models/education';
import { getAw } from '../fn/user-profile-controller/get-aw';
import { GetAw$Params } from '../fn/user-profile-controller/get-aw';
import { getE } from '../fn/user-profile-controller/get-e';
import { GetE$Params } from '../fn/user-profile-controller/get-e';
import { getS } from '../fn/user-profile-controller/get-s';
import { GetS$Params } from '../fn/user-profile-controller/get-s';
import { getUserProfile } from '../fn/user-profile-controller/get-user-profile';
import { GetUserProfile$Params } from '../fn/user-profile-controller/get-user-profile';
import { Speciality } from '../models/speciality';
import { updateEvenement1 } from '../fn/user-profile-controller/update-evenement-1';
import { UpdateEvenement1$Params } from '../fn/user-profile-controller/update-evenement-1';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvenement1()` */
  static readonly UpdateEvenement1Path = '/auth/profile/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvenement1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement1$Response(params: UpdateEvenement1$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateEvenement1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvenement1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement1(params: UpdateEvenement1$Params, context?: HttpContext): Observable<User> {
    return this.updateEvenement1$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `addAward()` */
  static readonly AddAwardPath = '/auth/profile/addaw/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAward()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAward$Response(params: AddAward$Params, context?: HttpContext): Observable<StrictHttpResponse<Award>> {
    return addAward(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAward$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAward(params: AddAward$Params, context?: HttpContext): Observable<Award> {
    return this.addAward$Response(params, context).pipe(
      map((r: StrictHttpResponse<Award>): Award => r.body)
    );
  }

  /** Path part for operation `addS()` */
  static readonly AddSPath = '/auth/profile/addS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addS()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addS$Response(params: AddS$Params, context?: HttpContext): Observable<StrictHttpResponse<Speciality>> {
    return addS(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addS$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addS(params: AddS$Params, context?: HttpContext): Observable<Speciality> {
    return this.addS$Response(params, context).pipe(
      map((r: StrictHttpResponse<Speciality>): Speciality => r.body)
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

  /** Path part for operation `addE()` */
  static readonly AddEPath = '/auth/profile/addE/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addE()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addE$Response(params: AddE$Params, context?: HttpContext): Observable<StrictHttpResponse<Education>> {
    return addE(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addE$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addE(params: AddE$Params, context?: HttpContext): Observable<Education> {
    return this.addE$Response(params, context).pipe(
      map((r: StrictHttpResponse<Education>): Education => r.body)
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

  /** Path part for operation `getS()` */
  static readonly GetSPath = '/auth/profile/getS/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getS()` instead.
   *
   * This method doesn't expect any request body.
   */
  getS$Response(params: GetS$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Speciality>>> {
    return getS(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getS$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getS(params: GetS$Params, context?: HttpContext): Observable<Array<Speciality>> {
    return this.getS$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Speciality>>): Array<Speciality> => r.body)
    );
  }

  /** Path part for operation `getE()` */
  static readonly GetEPath = '/auth/profile/getE/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getE()` instead.
   *
   * This method doesn't expect any request body.
   */
  getE$Response(params: GetE$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Education>>> {
    return getE(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getE$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getE(params: GetE$Params, context?: HttpContext): Observable<Array<Education>> {
    return this.getE$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Education>>): Array<Education> => r.body)
    );
  }

  /** Path part for operation `getAw()` */
  static readonly GetAwPath = '/auth/profile/getA/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAw()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAw$Response(params: GetAw$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Award>>> {
    return getAw(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAw$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAw(params: GetAw$Params, context?: HttpContext): Observable<Array<Award>> {
    return this.getAw$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Award>>): Array<Award> => r.body)
    );
  }

}
