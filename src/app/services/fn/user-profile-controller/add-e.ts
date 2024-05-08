/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Education } from '../../models/education';

export interface AddE$Params {
  id: number;
      body: Education
}

export function addE(http: HttpClient, rootUrl: string, params: AddE$Params, context?: HttpContext): Observable<StrictHttpResponse<Education>> {
  const rb = new RequestBuilder(rootUrl, addE.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Education>;
    })
  );
}

addE.PATH = '/auth/profile/addE/{id}';
