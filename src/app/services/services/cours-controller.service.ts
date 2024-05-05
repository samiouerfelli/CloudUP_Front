/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CoursResponse } from '../models/cours-response';
import { deleteCours1 } from '../fn/cours-controller/delete-cours-1';
import { DeleteCours1$Params } from '../fn/cours-controller/delete-cours-1';
import { findAllCours } from '../fn/cours-controller/find-all-cours';
import { FindAllCours$Params } from '../fn/cours-controller/find-all-cours';
import { findCoursById } from '../fn/cours-controller/find-cours-by-id';
import { FindCoursById$Params } from '../fn/cours-controller/find-cours-by-id';
import { findCoursByName } from '../fn/cours-controller/find-cours-by-name';
import { FindCoursByName$Params } from '../fn/cours-controller/find-cours-by-name';
import { findCoursByOwner } from '../fn/cours-controller/find-cours-by-owner';
import { FindCoursByOwner$Params } from '../fn/cours-controller/find-cours-by-owner';
import { PageResponseCoursResponse } from '../models/page-response-cours-response';
import { saveCours } from '../fn/cours-controller/save-cours';
import { SaveCours$Params } from '../fn/cours-controller/save-cours';
import { updateCours } from '../fn/cours-controller/update-cours';
import { UpdateCours$Params } from '../fn/cours-controller/update-cours';

@Injectable({ providedIn: 'root' })
export class CoursControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCours()` */
  static readonly UpdateCoursPath = '/auth/updateCours/{coursID}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCours()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCours$Response(params: UpdateCours$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCours$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCours(params: UpdateCours$Params, context?: HttpContext): Observable<number> {
    return this.updateCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `saveCours()` */
  static readonly SaveCoursPath = '/auth/addCours';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCours()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCours$Response(params: SaveCours$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCours$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCours(params: SaveCours$Params, context?: HttpContext): Observable<number> {
    return this.saveCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findCoursByName()` */
  static readonly FindCoursByNamePath = '/auth/retrieveCoursByName/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCoursByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursByName$Response(params: FindCoursByName$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCoursResponse>> {
    return findCoursByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCoursByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursByName(params: FindCoursByName$Params, context?: HttpContext): Observable<PageResponseCoursResponse> {
    return this.findCoursByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCoursResponse>): PageResponseCoursResponse => r.body)
    );
  }

  /** Path part for operation `findCoursById()` */
  static readonly FindCoursByIdPath = '/auth/retrieveByIdCours/{idC}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCoursById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursById$Response(params: FindCoursById$Params, context?: HttpContext): Observable<StrictHttpResponse<CoursResponse>> {
    return findCoursById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCoursById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursById(params: FindCoursById$Params, context?: HttpContext): Observable<CoursResponse> {
    return this.findCoursById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CoursResponse>): CoursResponse => r.body)
    );
  }

  /** Path part for operation `findAllCours()` */
  static readonly FindAllCoursPath = '/auth/retrieveAllCours';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCours()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCours$Response(params?: FindAllCours$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCoursResponse>> {
    return findAllCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllCours$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCours(params?: FindAllCours$Params, context?: HttpContext): Observable<PageResponseCoursResponse> {
    return this.findAllCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCoursResponse>): PageResponseCoursResponse => r.body)
    );
  }

  /** Path part for operation `findCoursByOwner()` */
  static readonly FindCoursByOwnerPath = '/auth/findCoursByOwner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCoursByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursByOwner$Response(params?: FindCoursByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCoursResponse>> {
    return findCoursByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCoursByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCoursByOwner(params?: FindCoursByOwner$Params, context?: HttpContext): Observable<PageResponseCoursResponse> {
    return this.findCoursByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCoursResponse>): PageResponseCoursResponse => r.body)
    );
  }

  /** Path part for operation `deleteCours1()` */
  static readonly DeleteCours1Path = '/auth/deleteCours/{idC}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCours1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCours1$Response(params: DeleteCours1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCours1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCours1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCours1(params: DeleteCours1$Params, context?: HttpContext): Observable<void> {
    return this.deleteCours1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
