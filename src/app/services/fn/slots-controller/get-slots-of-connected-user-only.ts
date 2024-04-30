/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TimeSlotResponse } from '../../models/time-slot-response';

export interface GetSlotsOfConnectedUserOnly$Params {
  day: string;
}

export function getSlotsOfConnectedUserOnly(http: HttpClient, rootUrl: string, params: GetSlotsOfConnectedUserOnly$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TimeSlotResponse>>> {
  const rb = new RequestBuilder(rootUrl, getSlotsOfConnectedUserOnly.PATH, 'get');
  if (params) {
    rb.path('day', params.day, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TimeSlotResponse>>;
    })
  );
}

getSlotsOfConnectedUserOnly.PATH = '/auth/getSlotsOfConnectedUserOnly/{day}';
