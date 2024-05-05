/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TimeSlot } from '../../models/time-slot';

export interface GetAvailableTimeSlots$Params {
  id: number;
}

export function getAvailableTimeSlots(http: HttpClient, rootUrl: string, params: GetAvailableTimeSlots$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TimeSlot>>> {
  const rb = new RequestBuilder(rootUrl, getAvailableTimeSlots.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TimeSlot>>;
    })
  );
}

getAvailableTimeSlots.PATH = '/auth/getslots/{id}';
