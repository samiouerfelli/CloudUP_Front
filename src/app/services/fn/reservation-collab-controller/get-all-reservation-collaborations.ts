/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationCollaboration } from '../../models/reservation-collaboration';

export interface GetAllReservationCollaborations$Params {
}

export function getAllReservationCollaborations(http: HttpClient, rootUrl: string, params?: GetAllReservationCollaborations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationCollaboration>>> {
  const rb = new RequestBuilder(rootUrl, getAllReservationCollaborations.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ReservationCollaboration>>;
    })
  );
}

getAllReservationCollaborations.PATH = '/auth/collabreservation';
