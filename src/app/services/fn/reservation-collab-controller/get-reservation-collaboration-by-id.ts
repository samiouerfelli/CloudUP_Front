/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationCollaboration } from '../../models/reservation-collaboration';

export interface GetReservationCollaborationById$Params {
  id: number;
}

export function getReservationCollaborationById(http: HttpClient, rootUrl: string, params: GetReservationCollaborationById$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCollaboration>> {
  const rb = new RequestBuilder(rootUrl, getReservationCollaborationById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReservationCollaboration>;
    })
  );
}

getReservationCollaborationById.PATH = '/auth/getrescolbyid/{id}';
