/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationCollaboration } from '../../models/reservation-collaboration';

export interface GetReservationsByUserId$Params {
  idUser: number;
}

export function getReservationsByUserId(http: HttpClient, rootUrl: string, params: GetReservationsByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationCollaboration>>> {
  const rb = new RequestBuilder(rootUrl, getReservationsByUserId.PATH, 'get');
  if (params) {
    rb.path('idUser', params.idUser, {});
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

getReservationsByUserId.PATH = '/auth/reservationsBYID/{idUser}';
