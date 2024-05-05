/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reservation } from '../../models/reservation';

export interface UpdateReservation$Params {
      body: Reservation
}

export function updateReservation(http: HttpClient, rootUrl: string, params: UpdateReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<Reservation>> {
  const rb = new RequestBuilder(rootUrl, updateReservation.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Reservation>;
    })
  );
}

updateReservation.PATH = '/auth/updateReservation';
