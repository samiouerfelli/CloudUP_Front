/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CoursResponse } from '../../models/cours-response';

export interface FindCoursById$Params {
  idC: number;
}

export function findCoursById(http: HttpClient, rootUrl: string, params: FindCoursById$Params, context?: HttpContext): Observable<StrictHttpResponse<CoursResponse>> {
  const rb = new RequestBuilder(rootUrl, findCoursById.PATH, 'get');
  if (params) {
    rb.path('idC', params.idC, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CoursResponse>;
    })
  );
}

findCoursById.PATH = '/auth/retrieveByIdCours/{idC}';
