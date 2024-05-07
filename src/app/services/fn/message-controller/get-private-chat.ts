/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PrivateChat } from '../../models/private-chat';

export interface GetPrivateChat$Params {
}

export function getPrivateChat(http: HttpClient, rootUrl: string, params?: GetPrivateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PrivateChat>>> {
  const rb = new RequestBuilder(rootUrl, getPrivateChat.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PrivateChat>>;
    })
  );
}

getPrivateChat.PATH = '/reclamation/get-private-chat';
