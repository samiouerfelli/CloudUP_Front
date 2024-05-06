/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseCoursResponse } from '../../models/page-response-cours-response';

export interface FindCoursByOwner$Params {
  page?: number;
  size?: number;
}

export function findCoursByOwner(http: HttpClient, rootUrl: string, params?: FindCoursByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCoursResponse>> {
  const rb = new RequestBuilder(rootUrl, findCoursByOwner.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseCoursResponse>;
    })
  );
}

findCoursByOwner.PATH = '/auth/findCoursByOwner';
