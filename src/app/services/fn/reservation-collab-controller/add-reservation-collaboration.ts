/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationCollaboration } from '../../models/reservation-collaboration';

export interface AddReservationCollaboration$Params {
  userId: number;
  collaborationId: number;
}

export function addReservationCollaboration(http: HttpClient, rootUrl: string, params: AddReservationCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<ReservationCollaboration>> {
  const rb = new RequestBuilder(rootUrl, addReservationCollaboration.PATH, 'post');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.path('collaborationId', params.collaborationId, {});
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

addReservationCollaboration.PATH = '/auth/addReservationCollaboration/{userId}/{collaborationId}';
