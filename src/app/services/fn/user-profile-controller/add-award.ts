/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Award } from '../../models/award';

export interface AddAward$Params {
  id: number;
      body: Award
}

export function addAward(http: HttpClient, rootUrl: string, params: AddAward$Params, context?: HttpContext): Observable<StrictHttpResponse<Award>> {
  const rb = new RequestBuilder(rootUrl, addAward.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Award>;
    })
  );
}

addAward.PATH = '/auth/profile/addaw/{id}';
