/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCollaboration } from '../fn/evenement-controller/add-collaboration';
import { AddCollaboration$Params } from '../fn/evenement-controller/add-collaboration';
import { addEvenement } from '../fn/evenement-controller/add-evenement';
import { AddEvenement$Params } from '../fn/evenement-controller/add-evenement';
import { addParticipant } from '../fn/evenement-controller/add-participant';
import { AddParticipant$Params } from '../fn/evenement-controller/add-participant';
import { deleteEvenement } from '../fn/evenement-controller/delete-evenement';
import { DeleteEvenement$Params } from '../fn/evenement-controller/delete-evenement';
import { Evenement } from '../models/evenement';
import { getAllEvents } from '../fn/evenement-controller/get-all-events';
import { GetAllEvents$Params } from '../fn/evenement-controller/get-all-events';
import { getParticipantCount } from '../fn/evenement-controller/get-participant-count';
import { GetParticipantCount$Params } from '../fn/evenement-controller/get-participant-count';
import { isParticipating } from '../fn/evenement-controller/is-participating';
import { IsParticipating$Params } from '../fn/evenement-controller/is-participating';
import { removeParticipant } from '../fn/evenement-controller/remove-participant';
import { RemoveParticipant$Params } from '../fn/evenement-controller/remove-participant';
import { reportEvent } from '../fn/evenement-controller/report-event';
import { ReportEvent$Params } from '../fn/evenement-controller/report-event';
import { retrieveAllEvenements } from '../fn/evenement-controller/retrieve-all-evenements';
import { RetrieveAllEvenements$Params } from '../fn/evenement-controller/retrieve-all-evenements';
import { retrieveEvenementById } from '../fn/evenement-controller/retrieve-evenement-by-id';
import { RetrieveEvenementById$Params } from '../fn/evenement-controller/retrieve-evenement-by-id';
import { updateEvenement2 } from '../fn/evenement-controller/update-evenement-2';
import { UpdateEvenement2$Params } from '../fn/evenement-controller/update-evenement-2';

@Injectable({ providedIn: 'root' })
export class EvenementControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateEvenement2()` */
  static readonly UpdateEvenement2Path = '/auth/evenement/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvenement2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement2$Response(params: UpdateEvenement2$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return updateEvenement2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvenement2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvenement2(params: UpdateEvenement2$Params, context?: HttpContext): Observable<Evenement> {
    return this.updateEvenement2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `reportEvent()` */
  static readonly ReportEventPath = '/auth/evenement/report/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `reportEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportEvent$Response(params: ReportEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return reportEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `reportEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  reportEvent(params: ReportEvent$Params, context?: HttpContext): Observable<Evenement> {
    return this.reportEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `addParticipant()` */
  static readonly AddParticipantPath = '/auth/evenement/join/{evenementId}/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  addParticipant$Response(params: AddParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return addParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addParticipant(params: AddParticipant$Params, context?: HttpContext): Observable<Evenement> {
    return this.addParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `addEvenement()` */
  static readonly AddEvenementPath = '/auth/evenement/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addEvenement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addEvenement$Response(params: AddEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return addEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addEvenement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addEvenement(params: AddEvenement$Params, context?: HttpContext): Observable<Evenement> {
    return this.addEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `addCollaboration()` */
  static readonly AddCollaborationPath = '/auth/evenement/add2';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCollaboration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration$Response(params: AddCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCollaboration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration(params: AddCollaboration$Params, context?: HttpContext): Observable<string> {
    return this.addCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `retrieveEvenementById()` */
  static readonly RetrieveEvenementByIdPath = '/auth/evenement/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveEvenementById()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveEvenementById$Response(params: RetrieveEvenementById$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return retrieveEvenementById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveEvenementById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveEvenementById(params: RetrieveEvenementById$Params, context?: HttpContext): Observable<Evenement> {
    return this.retrieveEvenementById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `getParticipantCount()` */
  static readonly GetParticipantCountPath = '/auth/evenement/participants/{eventId}/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParticipantCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParticipantCount$Response(params: GetParticipantCount$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getParticipantCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getParticipantCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParticipantCount(params: GetParticipantCount$Params, context?: HttpContext): Observable<number> {
    return this.getParticipantCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `isParticipating()` */
  static readonly IsParticipatingPath = '/auth/evenement/isParticipating/{evenementId}/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `isParticipating()` instead.
   *
   * This method doesn't expect any request body.
   */
  isParticipating$Response(params: IsParticipating$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return isParticipating(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `isParticipating$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  isParticipating(params: IsParticipating$Params, context?: HttpContext): Observable<boolean> {
    return this.isParticipating$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `retrieveAllEvenements()` */
  static readonly RetrieveAllEvenementsPath = '/auth/evenement/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllEvenements()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllEvenements$Response(params?: RetrieveAllEvenements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Evenement>>> {
    return retrieveAllEvenements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllEvenements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllEvenements(params?: RetrieveAllEvenements$Params, context?: HttpContext): Observable<Array<Evenement>> {
    return this.retrieveAllEvenements$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Evenement>>): Array<Evenement> => r.body)
    );
  }

  /** Path part for operation `getAllEvents()` */
  static readonly GetAllEventsPath = '/auth/evenement/Top3';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents$Response(params?: GetAllEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Evenement>>> {
    return getAllEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents(params?: GetAllEvents$Params, context?: HttpContext): Observable<Array<Evenement>> {
    return this.getAllEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Evenement>>): Array<Evenement> => r.body)
    );
  }

  /** Path part for operation `removeParticipant()` */
  static readonly RemoveParticipantPath = '/auth/evenement/leave/{evenementId}/{utilisateurId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeParticipant$Response(params: RemoveParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
    return removeParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeParticipant(params: RemoveParticipant$Params, context?: HttpContext): Observable<Evenement> {
    return this.removeParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Evenement>): Evenement => r.body)
    );
  }

  /** Path part for operation `deleteEvenement()` */
  static readonly DeleteEvenementPath = '/auth/evenement/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEvenement()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvenement$Response(params: DeleteEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEvenement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEvenement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvenement(params: DeleteEvenement$Params, context?: HttpContext): Observable<void> {
    return this.deleteEvenement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
