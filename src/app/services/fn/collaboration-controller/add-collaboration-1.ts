/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaboration } from '../../models/collaboration';

export interface AddCollaboration1$Params {
      body: Collaboration
}

export function addCollaboration1(http: HttpClient, rootUrl: string, params: AddCollaboration1$Params, context?: HttpContext): Observable<StrictHttpResponse<Collaboration>> {
  const rb = new RequestBuilder(rootUrl, addCollaboration1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Collaboration>;
    })
  );
}

addCollaboration1.PATH = '/auth/addCollaboration';
