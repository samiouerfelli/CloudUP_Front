/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CoursResponse } from '../../models/cours-response';

export interface FindCoursByOwner$Params {
}

export function findCoursByOwner(http: HttpClient, rootUrl: string, params?: FindCoursByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CoursResponse>>> {
  const rb = new RequestBuilder(rootUrl, findCoursByOwner.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CoursResponse>>;
    })
  );
}

findCoursByOwner.PATH = '/auth/findCoursByOwner';
