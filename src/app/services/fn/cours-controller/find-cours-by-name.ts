/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseCoursResponse } from '../../models/page-response-cours-response';

export interface FindCoursByName$Params {
  page?: number;
  size?: number;
  name: string;
}

export function findCoursByName(http: HttpClient, rootUrl: string, params: FindCoursByName$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCoursResponse>> {
  const rb = new RequestBuilder(rootUrl, findCoursByName.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
    rb.path('name', params.name, {});
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

findCoursByName.PATH = '/auth/retrieveCoursByName/{name}';
