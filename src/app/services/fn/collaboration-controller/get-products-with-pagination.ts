/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaboration } from '../../models/collaboration';

export interface GetProductsWithPagination$Params {
  offset: number;
  pageSize: number;
}

export function getProductsWithPagination(http: HttpClient, rootUrl: string, params: GetProductsWithPagination$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
  const rb = new RequestBuilder(rootUrl, getProductsWithPagination.PATH, 'get');
  if (params) {
    rb.path('offset', params.offset, {});
    rb.path('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Collaboration>>;
    })
  );
}

getProductsWithPagination.PATH = '/auth/paginations/{offset}/{pageSize}';
