/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Award } from '../../models/award';

export interface GetAw$Params {
  id: number;
}

export function getAw(http: HttpClient, rootUrl: string, params: GetAw$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Award>>> {
  const rb = new RequestBuilder(rootUrl, getAw.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Award>>;
    })
  );
}

getAw.PATH = '/auth/profile/getA/{id}';
