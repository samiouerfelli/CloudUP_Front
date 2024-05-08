/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addReservationCollaboration } from '../fn/reservation-collab-controller/add-reservation-collaboration';
import { AddReservationCollaboration$Params } from '../fn/reservation-collab-controller/add-reservation-collaboration';
import { deleteReservationCollaboration } from '../fn/reservation-collab-controller/delete-reservation-collaboration';
import { DeleteReservationCollaboration$Params } from '../fn/reservation-collab-controller/delete-reservation-collaboration';
import { getAllReservationCollaborations } from '../fn/reservation-collab-controller/get-all-reservation-collaborations';
import { GetAllReservationCollaborations$Params } from '../fn/reservation-collab-controller/get-all-reservation-collaborations';
import { getReservationCollaborationById } from '../fn/reservation-collab-controller/get-reservation-collaboration-by-id';
import { GetReservationCollaborationById$Params } from '../fn/reservation-collab-controller/get-reservation-collaboration-by-id';
import { getReservationsByUserId } from '../fn/reservation-collab-controller/get-reservations-by-user-id';
import { GetReservationsByUserId$Params } from '../fn/reservation-collab-controller/get-reservations-by-user-id';
import { ReservationCollaboration } from '../models/reservation-collaboration';

@Injectable({ providedIn: 'root' })
export class ReservationCollabControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addReservationCollaboration()` */
  static readonly AddReservationCollaborationPath = '/auth/addReservationCollaboration/{userId}/{collaborationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReservationCollaboration()` instead.
   *
   * This method doesn't expect any request body.
   */
  addReservationCollaboration$Response(params: AddReservationCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCollaboration>> {
    return addReservationCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReservationCollaboration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addReservationCollaboration(params: AddReservationCollaboration$Params, context?: HttpContext): Observable<ReservationCollaboration> {
    return this.addReservationCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationCollaboration>): ReservationCollaboration => r.body)
    );
  }

  /** Path part for operation `getReservationsByUserId()` */
  static readonly GetReservationsByUserIdPath = '/auth/reservationsBYID/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationsByUserId$Response(params: GetReservationsByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationCollaboration>>> {
    return getReservationsByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationsByUserId(params: GetReservationsByUserId$Params, context?: HttpContext): Observable<Array<ReservationCollaboration>> {
    return this.getReservationsByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReservationCollaboration>>): Array<ReservationCollaboration> => r.body)
    );
  }

  /** Path part for operation `getReservationCollaborationById()` */
  static readonly GetReservationCollaborationByIdPath = '/auth/getrescolbyid/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationCollaborationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationCollaborationById$Response(params: GetReservationCollaborationById$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCollaboration>> {
    return getReservationCollaborationById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationCollaborationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationCollaborationById(params: GetReservationCollaborationById$Params, context?: HttpContext): Observable<ReservationCollaboration> {
    return this.getReservationCollaborationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationCollaboration>): ReservationCollaboration => r.body)
    );
  }

  /** Path part for operation `getAllReservationCollaborations()` */
  static readonly GetAllReservationCollaborationsPath = '/auth/collabreservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllReservationCollaborations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReservationCollaborations$Response(params?: GetAllReservationCollaborations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationCollaboration>>> {
    return getAllReservationCollaborations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllReservationCollaborations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReservationCollaborations(params?: GetAllReservationCollaborations$Params, context?: HttpContext): Observable<Array<ReservationCollaboration>> {
    return this.getAllReservationCollaborations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReservationCollaboration>>): Array<ReservationCollaboration> => r.body)
    );
  }

  /** Path part for operation `deleteReservationCollaboration()` */
  static readonly DeleteReservationCollaborationPath = '/auth/delcolresbyid/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReservationCollaboration()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservationCollaboration$Response(params: DeleteReservationCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReservationCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReservationCollaboration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservationCollaboration(params: DeleteReservationCollaboration$Params, context?: HttpContext): Observable<void> {
    return this.deleteReservationCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
