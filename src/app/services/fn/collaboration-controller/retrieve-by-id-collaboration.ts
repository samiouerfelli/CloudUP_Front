/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaboration } from '../../models/collaboration';

export interface RetrieveByIdCollaboration$Params {
  idcol: number;
}

export function retrieveByIdCollaboration(http: HttpClient, rootUrl: string, params: RetrieveByIdCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<Collaboration>> {
  const rb = new RequestBuilder(rootUrl, retrieveByIdCollaboration.PATH, 'get');
  if (params) {
    rb.path('idcol', params.idcol, {});
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

retrieveByIdCollaboration.PATH = '/auth/retrieveByIdCollaboration/{idcol}';
