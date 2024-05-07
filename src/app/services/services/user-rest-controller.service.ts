/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addU } from '../fn/user-rest-controller/add-u';
import { AddU$Params } from '../fn/user-rest-controller/add-u';
import { Commentary } from '../models/commentary';
import { getRole } from '../fn/user-rest-controller/get-role';
import { GetRole$Params } from '../fn/user-rest-controller/get-role';
import { getTokenAndReturnId } from '../fn/user-rest-controller/get-token-and-return-id';
import { GetTokenAndReturnId$Params } from '../fn/user-rest-controller/get-token-and-return-id';
import { Publication } from '../models/publication';
import { retrieveAllC } from '../fn/user-rest-controller/retrieve-all-c';
import { RetrieveAllC$Params } from '../fn/user-rest-controller/retrieve-all-c';
import { retrieveAllP } from '../fn/user-rest-controller/retrieve-all-p';
import { RetrieveAllP$Params } from '../fn/user-rest-controller/retrieve-all-p';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addU()` */
  static readonly AddUPath = '/auth/addUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addU()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addU$Response(params: AddU$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return addU(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addU$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addU(params: AddU$Params, context?: HttpContext): Observable<User> {
    return this.addU$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `retrieveAllP()` */
  static readonly RetrieveAllPPath = '/auth/retrieveAllPtoUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllP()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllP$Response(params?: RetrieveAllP$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Publication>>> {
    return retrieveAllP(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllP$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllP(params?: RetrieveAllP$Params, context?: HttpContext): Observable<Array<Publication>> {
    return this.retrieveAllP$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Publication>>): Array<Publication> => r.body)
    );
  }

  /** Path part for operation `retrieveAllC()` */
  static readonly RetrieveAllCPath = '/auth/retrieveAllCtoUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllC()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllC$Response(params?: RetrieveAllC$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Commentary>>> {
    return retrieveAllC(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllC$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllC(params?: RetrieveAllC$Params, context?: HttpContext): Observable<Array<Commentary>> {
    return this.retrieveAllC$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Commentary>>): Array<Commentary> => r.body)
    );
  }

  /** Path part for operation `getTokenAndReturnId()` */
  static readonly GetTokenAndReturnIdPath = '/auth/getTokenAndReturnID';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenAndReturnId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenAndReturnId$Response(params: GetTokenAndReturnId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getTokenAndReturnId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTokenAndReturnId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenAndReturnId(params: GetTokenAndReturnId$Params, context?: HttpContext): Observable<number> {
    return this.getTokenAndReturnId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getRole()` */
  static readonly GetRolePath = '/auth/getRole/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole$Response(params: GetRole$Params, context?: HttpContext): Observable<StrictHttpResponse<'Professor' | 'Student' | 'Club' | 'Admin'>> {
    return getRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRole(params: GetRole$Params, context?: HttpContext): Observable<'Professor' | 'Student' | 'Club' | 'Admin'> {
    return this.getRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<'Professor' | 'Student' | 'Club' | 'Admin'>): 'Professor' | 'Student' | 'Club' | 'Admin' => r.body)
    );
  }

}
