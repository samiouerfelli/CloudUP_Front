/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Evenement } from '../../models/evenement';

export interface ReportEvent$Params {
  eventId: number;
}

export function reportEvent(http: HttpClient, rootUrl: string, params: ReportEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
  const rb = new RequestBuilder(rootUrl, reportEvent.PATH, 'post');
  if (params) {
    rb.path('eventId', params.eventId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Evenement>;
    })
  );
}

reportEvent.PATH = '/auth/evenement/report/{eventId}';
