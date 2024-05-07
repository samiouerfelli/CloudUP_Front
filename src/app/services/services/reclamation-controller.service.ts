/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ajouterReclamation } from '../fn/reclamation-controller/ajouter-reclamation';
import { AjouterReclamation$Params } from '../fn/reclamation-controller/ajouter-reclamation';
import { deleteReclamation } from '../fn/reclamation-controller/delete-reclamation';
import { DeleteReclamation$Params } from '../fn/reclamation-controller/delete-reclamation';
import { getAllPagination } from '../fn/reclamation-controller/get-all-pagination';
import { GetAllPagination$Params } from '../fn/reclamation-controller/get-all-pagination';
import { getArchives } from '../fn/reclamation-controller/get-archives';
import { GetArchives$Params } from '../fn/reclamation-controller/get-archives';
import { PageReclamation } from '../models/page-reclamation';
import { Reclamation } from '../models/reclamation';
import { retrieveAll } from '../fn/reclamation-controller/retrieve-all';
import { RetrieveAll$Params } from '../fn/reclamation-controller/retrieve-all';
import { retrieveById } from '../fn/reclamation-controller/retrieve-by-id';
import { RetrieveById$Params } from '../fn/reclamation-controller/retrieve-by-id';
import { retrieveObjet } from '../fn/reclamation-controller/retrieve-objet';
import { RetrieveObjet$Params } from '../fn/reclamation-controller/retrieve-objet';
import { setReclam } from '../fn/reclamation-controller/set-reclam';
import { SetReclam$Params } from '../fn/reclamation-controller/set-reclam';
import { updateReclamation } from '../fn/reclamation-controller/update-reclamation';
import { UpdateReclamation$Params } from '../fn/reclamation-controller/update-reclamation';

@Injectable({ providedIn: 'root' })
export class ReclamationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateReclamation()` */
  static readonly UpdateReclamationPath = '/reclamation/updatereclam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReclamation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReclamation$Response(params: UpdateReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
    return updateReclamation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReclamation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReclamation(params: UpdateReclamation$Params, context?: HttpContext): Observable<Reclamation> {
    return this.updateReclamation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reclamation>): Reclamation => r.body)
    );
  }

  /** Path part for operation `setReclam()` */
  static readonly SetReclamPath = '/reclamation/traitereclam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `setReclam()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setReclam$Response(params: SetReclam$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
    return setReclam(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `setReclam$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  setReclam(params: SetReclam$Params, context?: HttpContext): Observable<Reclamation> {
    return this.setReclam$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reclamation>): Reclamation => r.body)
    );
  }

  /** Path part for operation `ajouterReclamation()` */
  static readonly AjouterReclamationPath = '/reclamation/addreclamation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterReclamation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterReclamation$Response(params: AjouterReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
    return ajouterReclamation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterReclamation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterReclamation(params: AjouterReclamation$Params, context?: HttpContext): Observable<Reclamation> {
    return this.ajouterReclamation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reclamation>): Reclamation => r.body)
    );
  }

  /** Path part for operation `getAllPagination()` */
  static readonly GetAllPaginationPath = '/reclamation/pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPagination()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPagination$Response(params?: GetAllPagination$Params, context?: HttpContext): Observable<StrictHttpResponse<PageReclamation>> {
    return getAllPagination(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPagination$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPagination(params?: GetAllPagination$Params, context?: HttpContext): Observable<PageReclamation> {
    return this.getAllPagination$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageReclamation>): PageReclamation => r.body)
    );
  }

  /** Path part for operation `retrieveById()` */
  static readonly RetrieveByIdPath = '/reclamation/getidreclam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveById()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveById$Response(params: RetrieveById$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
    return retrieveById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveById(params: RetrieveById$Params, context?: HttpContext): Observable<Reclamation> {
    return this.retrieveById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reclamation>): Reclamation => r.body)
    );
  }

  /** Path part for operation `getArchives()` */
  static readonly GetArchivesPath = '/reclamation/getarchivereclam';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArchives()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArchives$Response(params?: GetArchives$Params, context?: HttpContext): Observable<StrictHttpResponse<PageReclamation>> {
    return getArchives(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArchives$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArchives(params?: GetArchives$Params, context?: HttpContext): Observable<PageReclamation> {
    return this.getArchives$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageReclamation>): PageReclamation => r.body)
    );
  }

  /** Path part for operation `retrieveAll()` */
  static readonly RetrieveAllPath = '/reclamation/getallreclams';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAll$Response(params?: RetrieveAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reclamation>>> {
    return retrieveAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAll(params?: RetrieveAll$Params, context?: HttpContext): Observable<Array<Reclamation>> {
    return this.retrieveAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reclamation>>): Array<Reclamation> => r.body)
    );
  }

  /** Path part for operation `retrieveObjet()` */
  static readonly RetrieveObjetPath = '/reclamation/findobjetrec/{objet}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveObjet()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveObjet$Response(params: RetrieveObjet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reclamation>>> {
    return retrieveObjet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveObjet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveObjet(params: RetrieveObjet$Params, context?: HttpContext): Observable<Array<Reclamation>> {
    return this.retrieveObjet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reclamation>>): Array<Reclamation> => r.body)
    );
  }

  /** Path part for operation `deleteReclamation()` */
  static readonly DeleteReclamationPath = '/reclamation/deletereclam/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReclamation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReclamation$Response(params: DeleteReclamation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReclamation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReclamation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReclamation(params: DeleteReclamation$Params, context?: HttpContext): Observable<void> {
    return this.deleteReclamation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
