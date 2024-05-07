/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageReclamation } from '../../models/page-reclamation';

export interface GetAllPagination$Params {
  size?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: string;
}

export function getAllPagination(http: HttpClient, rootUrl: string, params?: GetAllPagination$Params, context?: HttpContext): Observable<StrictHttpResponse<PageReclamation>> {
  const rb = new RequestBuilder(rootUrl, getAllPagination.PATH, 'get');
  if (params) {
    rb.query('size', params.size, {});
    rb.query('page', params.page, {});
    rb.query('sortBy', params.sortBy, {});
    rb.query('sortOrder', params.sortOrder, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageReclamation>;
    })
  );
}

getAllPagination.PATH = '/reclamation/pagination';
