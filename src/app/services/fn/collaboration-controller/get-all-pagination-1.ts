/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageCollaboration } from '../../models/page-collaboration';

export interface GetAllPagination1$Params {
  size?: number;
  page?: number;
}

export function getAllPagination1(http: HttpClient, rootUrl: string, params?: GetAllPagination1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCollaboration>> {
  const rb = new RequestBuilder(rootUrl, getAllPagination1.PATH, 'get');
  if (params) {
    rb.query('size', params.size, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageCollaboration>;
    })
  );
}

getAllPagination1.PATH = '/auth/pagination';
