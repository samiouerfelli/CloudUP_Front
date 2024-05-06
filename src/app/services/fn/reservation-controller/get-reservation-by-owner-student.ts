/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationResponse } from '../../models/reservation-response';

export interface GetReservationByOwnerStudent$Params {
}

export function getReservationByOwnerStudent(http: HttpClient, rootUrl: string, params?: GetReservationByOwnerStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationResponse>>> {
  const rb = new RequestBuilder(rootUrl, getReservationByOwnerStudent.PATH, 'get');
  if (params) {
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

getReservationByOwnerStudent.PATH = '/auth/getReservationByOwnerStudent';
