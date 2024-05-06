/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteCours } from '../fn/slots-controller/delete-cours';
import { DeleteCours$Params } from '../fn/slots-controller/delete-cours';
import { getSlotsForBooking } from '../fn/slots-controller/get-slots-for-booking';
import { GetSlotsForBooking$Params } from '../fn/slots-controller/get-slots-for-booking';
import { getSlotsOfConnectedUserOnly } from '../fn/slots-controller/get-slots-of-connected-user-only';
import { GetSlotsOfConnectedUserOnly$Params } from '../fn/slots-controller/get-slots-of-connected-user-only';
import { saveSlot } from '../fn/slots-controller/save-slot';
import { SaveSlot$Params } from '../fn/slots-controller/save-slot';
import { TimeSlotResponse } from '../models/time-slot-response';

@Injectable({ providedIn: 'root' })
export class SlotsControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveSlot()` */
  static readonly SaveSlotPath = '/auth/addSlots';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSlot()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSlot$Response(params: SaveSlot$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveSlot(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSlot$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSlot(params: SaveSlot$Params, context?: HttpContext): Observable<number> {
    return this.saveSlot$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getSlotsOfConnectedUserOnly()` */
  static readonly GetSlotsOfConnectedUserOnlyPath = '/auth/getSlotsOfConnectedUserOnly/{day}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSlotsOfConnectedUserOnly()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSlotsOfConnectedUserOnly$Response(params: GetSlotsOfConnectedUserOnly$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TimeSlotResponse>>> {
    return getSlotsOfConnectedUserOnly(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSlotsOfConnectedUserOnly$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSlotsOfConnectedUserOnly(params: GetSlotsOfConnectedUserOnly$Params, context?: HttpContext): Observable<Array<TimeSlotResponse>> {
    return this.getSlotsOfConnectedUserOnly$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TimeSlotResponse>>): Array<TimeSlotResponse> => r.body)
    );
  }

  /** Path part for operation `getSlotsForBooking()` */
  static readonly GetSlotsForBookingPath = '/auth/getSlotsForBooking/{userID}/{day}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSlotsForBooking()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSlotsForBooking$Response(params: GetSlotsForBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TimeSlotResponse>>> {
    return getSlotsForBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSlotsForBooking$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSlotsForBooking(params: GetSlotsForBooking$Params, context?: HttpContext): Observable<Array<TimeSlotResponse>> {
    return this.getSlotsForBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TimeSlotResponse>>): Array<TimeSlotResponse> => r.body)
    );
  }

  /** Path part for operation `deleteCours()` */
  static readonly DeleteCoursPath = '/auth/deleteSlot/{idS}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCours()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCours$Response(params: DeleteCours$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCours(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCours$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCours(params: DeleteCours$Params, context?: HttpContext): Observable<void> {
    return this.deleteCours$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
