/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TimeSlot } from '../../models/time-slot';

export interface AddTimeSlot$Params {
  id: number;
      body: TimeSlot
}

export function addTimeSlot(http: HttpClient, rootUrl: string, params: AddTimeSlot$Params, context?: HttpContext): Observable<StrictHttpResponse<TimeSlot>> {
  const rb = new RequestBuilder(rootUrl, addTimeSlot.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TimeSlot>;
    })
  );
}

addTimeSlot.PATH = '/auth/addslots/{id}';
