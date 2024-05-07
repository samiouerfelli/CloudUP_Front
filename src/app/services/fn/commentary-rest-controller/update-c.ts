/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Commentary } from '../../models/commentary';

export interface UpdateC$Params {
      body: Commentary
}

export function updateC(http: HttpClient, rootUrl: string, params: UpdateC$Params, context?: HttpContext): Observable<StrictHttpResponse<Commentary>> {
  const rb = new RequestBuilder(rootUrl, updateC.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Commentary>;
    })
  );
}

updateC.PATH = '/auth/updateC';
