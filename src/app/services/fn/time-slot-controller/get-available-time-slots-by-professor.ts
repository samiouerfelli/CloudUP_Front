/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TimeSlot } from '../../models/time-slot';

export interface GetAvailableTimeSlotsByProfessor$Params {
  professorId: number;
}

export function getAvailableTimeSlotsByProfessor(http: HttpClient, rootUrl: string, params: GetAvailableTimeSlotsByProfessor$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TimeSlot>>> {
  const rb = new RequestBuilder(rootUrl, getAvailableTimeSlotsByProfessor.PATH, 'get');
  if (params) {
    rb.path('professorId', params.professorId, {});
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

getAvailableTimeSlotsByProfessor.PATH = '/auth/api/timeslots/{professorId}';
