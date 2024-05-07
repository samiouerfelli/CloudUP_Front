/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Forum } from '../../models/forum';

export interface AddForum$Params {
      body: Forum
}

export function addForum(http: HttpClient, rootUrl: string, params: AddForum$Params, context?: HttpContext): Observable<StrictHttpResponse<Forum>> {
  const rb = new RequestBuilder(rootUrl, addForum.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Forum>;
    })
  );
}

addForum.PATH = '/auth/addForum';
