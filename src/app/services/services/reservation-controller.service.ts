/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteReservation } from '../fn/reservation-controller/delete-reservation';
import { DeleteReservation$Params } from '../fn/reservation-controller/delete-reservation';
import { getReservationById } from '../fn/reservation-controller/get-reservation-by-id';
import { GetReservationById$Params } from '../fn/reservation-controller/get-reservation-by-id';
import { getReservationByOwnerProfeesor } from '../fn/reservation-controller/get-reservation-by-owner-profeesor';
import { GetReservationByOwnerProfeesor$Params } from '../fn/reservation-controller/get-reservation-by-owner-profeesor';
import { getReservationByOwnerStudent } from '../fn/reservation-controller/get-reservation-by-owner-student';
import { GetReservationByOwnerStudent$Params } from '../fn/reservation-controller/get-reservation-by-owner-student';
import { getReservationStatus } from '../fn/reservation-controller/get-reservation-status';
import { GetReservationStatus$Params } from '../fn/reservation-controller/get-reservation-status';
import { ReservationResponse } from '../models/reservation-response';
import { saveReservation } from '../fn/reservation-controller/save-reservation';
import { SaveReservation$Params } from '../fn/reservation-controller/save-reservation';
import { updateReservationStatus } from '../fn/reservation-controller/update-reservation-status';
import { UpdateReservationStatus$Params } from '../fn/reservation-controller/update-reservation-status';

@Injectable({ providedIn: 'root' })
export class ReservationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveReservation()` */
  static readonly SaveReservationPath = '/auth/addReservation/{idCours}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveReservation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveReservation$Response(params: SaveReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveReservation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveReservation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveReservation(params: SaveReservation$Params, context?: HttpContext): Observable<number> {
    return this.saveReservation$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateReservationStatus()` */
  static readonly UpdateReservationStatusPath = '/auth/updateReservationStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReservationStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservationStatus$Response(params: UpdateReservationStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateReservationStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReservationStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReservationStatus(params: UpdateReservationStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateReservationStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getReservationStatus()` */
  static readonly GetReservationStatusPath = '/auth/getReservationStatus/{status}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationStatus$Response(params: GetReservationStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationResponse>>> {
    return getReservationStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationStatus(params: GetReservationStatus$Params, context?: HttpContext): Observable<Array<ReservationResponse>> {
    return this.getReservationStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReservationResponse>>): Array<ReservationResponse> => r.body)
    );
  }

  /** Path part for operation `getReservationByOwnerStudent()` */
  static readonly GetReservationByOwnerStudentPath = '/auth/getReservationByOwnerStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationByOwnerStudent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByOwnerStudent$Response(params?: GetReservationByOwnerStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationResponse>>> {
    return getReservationByOwnerStudent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationByOwnerStudent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByOwnerStudent(params?: GetReservationByOwnerStudent$Params, context?: HttpContext): Observable<Array<ReservationResponse>> {
    return this.getReservationByOwnerStudent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReservationResponse>>): Array<ReservationResponse> => r.body)
    );
  }

  /** Path part for operation `getReservationByOwnerProfeesor()` */
  static readonly GetReservationByOwnerProfeesorPath = '/auth/getReservationByOwnerProfeesor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationByOwnerProfeesor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByOwnerProfeesor$Response(params?: GetReservationByOwnerProfeesor$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationResponse>>> {
    return getReservationByOwnerProfeesor(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationByOwnerProfeesor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationByOwnerProfeesor(params?: GetReservationByOwnerProfeesor$Params, context?: HttpContext): Observable<Array<ReservationResponse>> {
    return this.getReservationByOwnerProfeesor$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ReservationResponse>>): Array<ReservationResponse> => r.body)
    );
  }

  /** Path part for operation `getReservationById()` */
  static readonly GetReservationByIdPath = '/auth/getReservationById/{idReservation}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReservationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationById$Response(params: GetReservationById$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationResponse>> {
    return getReservationById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReservationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReservationById(params: GetReservationById$Params, context?: HttpContext): Observable<ReservationResponse> {
    return this.getReservationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReservationResponse>): ReservationResponse => r.body)
    );
  }

  /** Path part for operation `deleteReservation()` */
  static readonly DeleteReservationPath = '/auth/deleteReservation/{idReservation}';

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
