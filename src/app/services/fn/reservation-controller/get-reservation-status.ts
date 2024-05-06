/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationResponse } from '../../models/reservation-response';

export interface GetReservationStatus$Params {
  status: string;
}

export function getReservationStatus(http: HttpClient, rootUrl: string, params: GetReservationStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationResponse>>> {
  const rb = new RequestBuilder(rootUrl, getReservationStatus.PATH, 'get');
  if (params) {
    rb.path('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ReservationResponse>>;
    })
  );
}

getReservationStatus.PATH = '/auth/getReservationStatus/{status}';
