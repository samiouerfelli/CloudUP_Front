/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaboration } from '../../models/collaboration';

export interface RetriveCollaboration$Params {
}

export function retriveCollaboration(http: HttpClient, rootUrl: string, params?: RetriveCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
  const rb = new RequestBuilder(rootUrl, retriveCollaboration.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Collaboration>>;
    })
  );
}

retriveCollaboration.PATH = '/auth/retriveCollaboration';
