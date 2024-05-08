/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPartenaires } from '../fn/partenaires-controller/add-partenaires';
import { AddPartenaires$Params } from '../fn/partenaires-controller/add-partenaires';
import { addPartenairess } from '../fn/partenaires-controller/add-partenairess';
import { AddPartenairess$Params } from '../fn/partenaires-controller/add-partenairess';
import { deletepartenaires } from '../fn/partenaires-controller/deletepartenaires';
import { Deletepartenaires$Params } from '../fn/partenaires-controller/deletepartenaires';
import { findAllPartenaires } from '../fn/partenaires-controller/find-all-partenaires';
import { FindAllPartenaires$Params } from '../fn/partenaires-controller/find-all-partenaires';
import { findPartenairesById } from '../fn/partenaires-controller/find-partenaires-by-id';
import { FindPartenairesById$Params } from '../fn/partenaires-controller/find-partenaires-by-id';
import { findPartenairesByNom } from '../fn/partenaires-controller/find-partenaires-by-nom';
import { FindPartenairesByNom$Params } from '../fn/partenaires-controller/find-partenaires-by-nom';
import { partenaires } from '../fn/partenaires-controller/partenaires';
import { Partenaires } from '../models/partenaires';
import { Partenaires$Params } from '../fn/partenaires-controller/partenaires';
import { updateEvenement } from '../fn/partenaires-controller/update-evenement';
import { UpdateEvenement$Params } from '../fn/partenaires-controller/update-evenement';

@Injectable({ providedIn: 'root' })
export class PartenairesControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvenement()` */
  static readonly UpdateEvenementPath = '/auth/updatePartenaires/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvenement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement$Response(params: UpdateEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
    return updateEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvenement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement(params: UpdateEvenement$Params, context?: HttpContext): Observable<Partenaires> {
    return this.updateEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Partenaires>): Partenaires => r.body)
    );
  }

  /** Path part for operation `addPartenairess()` */
  static readonly AddPartenairessPath = '/auth/addPartenairess';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPartenairess()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPartenairess$Response(params: AddPartenairess$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Partenaires>>> {
    return addPartenairess(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPartenairess$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPartenairess(params: AddPartenairess$Params, context?: HttpContext): Observable<Array<Partenaires>> {
    return this.addPartenairess$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Partenaires>>): Array<Partenaires> => r.body)
    );
  }

  /** Path part for operation `addPartenaires()` */
  static readonly AddPartenairesPath = '/auth/addPartenaires';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPartenaires()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPartenaires$Response(params: AddPartenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
    return addPartenaires(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPartenaires$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPartenaires(params: AddPartenaires$Params, context?: HttpContext): Observable<Partenaires> {
    return this.addPartenaires$Response(params, context).pipe(
      map((r: StrictHttpResponse<Partenaires>): Partenaires => r.body)
    );
  }

  /** Path part for operation `partenaires()` */
  static readonly PartenairesPath = '/auth/addP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `partenaires()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partenaires$Response(params: Partenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return partenaires(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `partenaires$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  partenaires(params: Partenaires$Params, context?: HttpContext): Observable<string> {
    return this.partenaires$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `findPartenairesByNom()` */
  static readonly FindPartenairesByNomPath = '/auth/partenairesbyname/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPartenairesByNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPartenairesByNom$Response(params?: FindPartenairesByNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
    return findPartenairesByNom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findPartenairesByNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPartenairesByNom(params?: FindPartenairesByNom$Params, context?: HttpContext): Observable<Partenaires> {
    return this.findPartenairesByNom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Partenaires>): Partenaires => r.body)
    );
  }

  /** Path part for operation `findAllPartenaires()` */
  static readonly FindAllPartenairesPath = '/auth/partenaires';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllPartenaires()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPartenaires$Response(params?: FindAllPartenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Partenaires>>> {
    return findAllPartenaires(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllPartenaires$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllPartenaires(params?: FindAllPartenaires$Params, context?: HttpContext): Observable<Array<Partenaires>> {
    return this.findAllPartenaires$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Partenaires>>): Array<Partenaires> => r.body)
    );
  }

  /** Path part for operation `findPartenairesById()` */
  static readonly FindPartenairesByIdPath = '/auth/partenaires/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPartenairesById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPartenairesById$Response(params: FindPartenairesById$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
    return findPartenairesById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findPartenairesById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPartenairesById(params: FindPartenairesById$Params, context?: HttpContext): Observable<Partenaires> {
    return this.findPartenairesById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Partenaires>): Partenaires => r.body)
    );
  }

  /** Path part for operation `deletepartenaires()` */
  static readonly DeletepartenairesPath = '/auth/deletePartenaires/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletepartenaires()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletepartenaires$Response(params: Deletepartenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deletepartenaires(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletepartenaires$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletepartenaires(params: Deletepartenaires$Params, context?: HttpContext): Observable<string> {
    return this.deletepartenaires$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
