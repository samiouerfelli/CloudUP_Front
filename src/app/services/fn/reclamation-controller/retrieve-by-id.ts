/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reclamation } from '../../models/reclamation';

export interface RetrieveById$Params {
  id: number;
}

export function retrieveById(http: HttpClient, rootUrl: string, params: RetrieveById$Params, context?: HttpContext): Observable<StrictHttpResponse<Reclamation>> {
  const rb = new RequestBuilder(rootUrl, retrieveById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Reclamation>;
    })
  );
}

retrieveById.PATH = '/reclamation/getidreclam/{id}';
