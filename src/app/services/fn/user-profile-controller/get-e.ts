/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Education } from '../../models/education';

export interface GetE$Params {
  id: number;
}

export function getE(http: HttpClient, rootUrl: string, params: GetE$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Education>>> {
  const rb = new RequestBuilder(rootUrl, getE.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Education>>;
    })
  );
}

getE.PATH = '/auth/profile/getE/{id}';
