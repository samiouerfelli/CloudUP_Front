/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/authentification/authenticate';
import { Authenticate$Params } from '../fn/authentification/authenticate';
import { AuthentificationResponse } from '../models/authentification-response';
import { confirm } from '../fn/authentification/confirm';
import { Confirm$Params } from '../fn/authentification/confirm';
import { findUserById } from '../fn/authentification/find-user-by-id';
import { FindUserById$Params } from '../fn/authentification/find-user-by-id';
import { getUser } from '../fn/authentification/get-user';
import { GetUser$Params } from '../fn/authentification/get-user';
import { logout } from '../fn/authentification/logout';
import { Logout$Params } from '../fn/authentification/logout';
import { register } from '../fn/authentification/register';
import { Register$Params } from '../fn/authentification/register';
import { updateUser } from '../fn/authentification/update-user';
import { UpdateUser$Params } from '../fn/authentification/update-user';
import { uploadUserPhoto } from '../fn/authentification/upload-user-photo';
import { UploadUserPhoto$Params } from '../fn/authentification/upload-user-photo';
import { User } from '../models/user';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class AuthentificationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/auth/updateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<number> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `logout()` */
  static readonly LogoutPath = '/auth/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(params?: Logout$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: Logout$Params, context?: HttpContext): Observable<{
}> {
    return this.logout$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `uploadUserPhoto()` */
  static readonly UploadUserPhotoPath = '/auth/image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadUserPhoto()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserPhoto$Response(params?: UploadUserPhoto$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadUserPhoto(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadUserPhoto$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserPhoto(params?: UploadUserPhoto$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadUserPhoto$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthentificationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthentificationResponse>): AuthentificationResponse => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/auth/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<{
}> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `findUserById()` */
  static readonly FindUserByIdPath = '/auth/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById$Response(params: FindUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return findUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById(params: FindUserById$Params, context?: HttpContext): Observable<UserResponse> {
    return this.findUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `getUser()` */
  static readonly GetUserPath = '/auth/getUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params?: GetUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params?: GetUser$Params, context?: HttpContext): Observable<User> {
    return this.getUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `confirm()` */
  static readonly ConfirmPath = '/auth/activate-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: Confirm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: Confirm$Params, context?: HttpContext): Observable<void> {
    return this.confirm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }
  getIDFromToken(token: string): Observable<number> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<number>('http://localhost:8080/api/v1/auth/getTokenAndReturnID?token=' + token, { headers });
  }
  getRole(idUser: number):Observable<string> {
    return this.http.get<string>(`Http://localhost:8080/api/v1/auth/getRole/${idUser}`);
  }

}
