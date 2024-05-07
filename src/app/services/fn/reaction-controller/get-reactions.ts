/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reactions } from '../../models/reactions';

export interface GetReactions$Params {
}

export function getReactions(http: HttpClient, rootUrl: string, params?: GetReactions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reactions>>> {
  const rb = new RequestBuilder(rootUrl, getReactions.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reactions>>;
    })
  );
}

getReactions.PATH = '/auth/reaction/retrieve-all-reactions';
