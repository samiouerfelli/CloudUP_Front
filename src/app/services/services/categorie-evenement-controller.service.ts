/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCategorieEvenement } from '../fn/categorie-evenement-controller/add-categorie-evenement';
import { AddCategorieEvenement$Params } from '../fn/categorie-evenement-controller/add-categorie-evenement';
import { CategorieEvenement } from '../models/categorie-evenement';
import { deleteCategorieEvenement } from '../fn/categorie-evenement-controller/delete-categorie-evenement';
import { DeleteCategorieEvenement$Params } from '../fn/categorie-evenement-controller/delete-categorie-evenement';
import { retrieveAllCategoriesEvenement } from '../fn/categorie-evenement-controller/retrieve-all-categories-evenement';
import { RetrieveAllCategoriesEvenement$Params } from '../fn/categorie-evenement-controller/retrieve-all-categories-evenement';
import { retrieveCategorieEvenementById } from '../fn/categorie-evenement-controller/retrieve-categorie-evenement-by-id';
import { RetrieveCategorieEvenementById$Params } from '../fn/categorie-evenement-controller/retrieve-categorie-evenement-by-id';
import { updateEvenement2 } from '../fn/categorie-evenement-controller/update-evenement-2';
import { UpdateEvenement2$Params } from '../fn/categorie-evenement-controller/update-evenement-2';

@Injectable({ providedIn: 'root' })
export class CategorieEvenementControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvenement2()` */
  static readonly UpdateEvenement2Path = '/auth/categories/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvenement2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement2$Response(params: UpdateEvenement2$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
    return updateEvenement2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvenement2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement2(params: UpdateEvenement2$Params, context?: HttpContext): Observable<CategorieEvenement> {
    return this.updateEvenement2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieEvenement>): CategorieEvenement => r.body)
    );
  }

  /** Path part for operation `addCategorieEvenement()` */
  static readonly AddCategorieEvenementPath = '/auth/categories/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCategorieEvenement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategorieEvenement$Response(params: AddCategorieEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
    return addCategorieEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCategorieEvenement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCategorieEvenement(params: AddCategorieEvenement$Params, context?: HttpContext): Observable<CategorieEvenement> {
    return this.addCategorieEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieEvenement>): CategorieEvenement => r.body)
    );
  }

  /** Path part for operation `retrieveCategorieEvenementById()` */
  static readonly RetrieveCategorieEvenementByIdPath = '/auth/categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveCategorieEvenementById()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveCategorieEvenementById$Response(params: RetrieveCategorieEvenementById$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
    return retrieveCategorieEvenementById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveCategorieEvenementById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveCategorieEvenementById(params: RetrieveCategorieEvenementById$Params, context?: HttpContext): Observable<CategorieEvenement> {
    return this.retrieveCategorieEvenementById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategorieEvenement>): CategorieEvenement => r.body)
    );
  }

  /** Path part for operation `retrieveAllCategoriesEvenement()` */
  static readonly RetrieveAllCategoriesEvenementPath = '/auth/categories/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllCategoriesEvenement()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllCategoriesEvenement$Response(params?: RetrieveAllCategoriesEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategorieEvenement>>> {
    return retrieveAllCategoriesEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllCategoriesEvenement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllCategoriesEvenement(params?: RetrieveAllCategoriesEvenement$Params, context?: HttpContext): Observable<Array<CategorieEvenement>> {
    return this.retrieveAllCategoriesEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategorieEvenement>>): Array<CategorieEvenement> => r.body)
    );
  }

  /** Path part for operation `deleteCategorieEvenement()` */
  static readonly DeleteCategorieEvenementPath = '/auth/categories/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategorieEvenement()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategorieEvenement$Response(params: DeleteCategorieEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCategorieEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategorieEvenement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategorieEvenement(params: DeleteCategorieEvenement$Params, context?: HttpContext): Observable<void> {
    return this.deleteCategorieEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
