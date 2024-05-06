/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addReservation } from '../fn/reservation-rest-controller/add-reservation';
import { AddReservation$Params } from '../fn/reservation-rest-controller/add-reservation';
import { deleteReservation } from '../fn/reservation-rest-controller/delete-reservation';
import { DeleteReservation$Params } from '../fn/reservation-rest-controller/delete-reservation';
import { Reservation } from '../models/reservation';
import { retrieveAllReservation } from '../fn/reservation-rest-controller/retrieve-all-reservation';
import { RetrieveAllReservation$Params } from '../fn/reservation-rest-controller/retrieve-all-reservation';
import { retrieveByIdReservation } from '../fn/reservation-rest-controller/retrieve-by-id-reservation';
import { RetrieveByIdReservation$Params } from '../fn/reservation-rest-controller/retrieve-by-id-reservation';
import { updateReservation } from '../fn/reservation-rest-controller/update-reservation';
import { UpdateReservation$Params } from '../fn/reservation-rest-controller/update-reservation';

@Injectable({ providedIn: 'root' })
export class ReservationRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateReservation()` */
  static readonly UpdateReservationPath = '/auth/updateReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservation$Response(params: UpdateReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reservation>> {
    return updateReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservation(params: UpdateReservation$Params, context?: HttpContext): Observable<Reservation> {
    return this.updateReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reservation>): Reservation => r.body)
    );
  }

  /** Path part for operation `addReservation()` */
  static readonly AddReservationPath = '/auth/addReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReservation$Response(params: AddReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReservation(params: AddReservation$Params, context?: HttpContext): Observable<string> {
    return this.addReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `retrieveByIdReservation()` */
  static readonly RetrieveByIdReservationPath = '/auth/retrieveByIdReservation/{idR}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByIdReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdReservation$Response(params: RetrieveByIdReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reservation>> {
    return retrieveByIdReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByIdReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdReservation(params: RetrieveByIdReservation$Params, context?: HttpContext): Observable<Reservation> {
    return this.retrieveByIdReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reservation>): Reservation => r.body)
    );
  }

  /** Path part for operation `retrieveAllReservation()` */
  static readonly RetrieveAllReservationPath = '/auth/retrieveAllReservation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllReservation$Response(params?: RetrieveAllReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reservation>>> {
    return retrieveAllReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllReservation(params?: RetrieveAllReservation$Params, context?: HttpContext): Observable<Array<Reservation>> {
    return this.retrieveAllReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reservation>>): Array<Reservation> => r.body)
    );
  }

  /** Path part for operation `deleteReservation()` */
  static readonly DeleteReservationPath = '/auth/deleteReservation/{idR}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReservation()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservation$Response(params: DeleteReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReservation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReservation(params: DeleteReservation$Params, context?: HttpContext): Observable<void> {
    return this.deleteReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
