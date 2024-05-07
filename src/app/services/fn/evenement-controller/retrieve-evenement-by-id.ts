/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Evenement } from '../../models/evenement';

export interface RetrieveEvenementById$Params {
  id: number;
}

export function retrieveEvenementById(http: HttpClient, rootUrl: string, params: RetrieveEvenementById$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
  const rb = new RequestBuilder(rootUrl, retrieveEvenementById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Evenement>;
    })
  );
}

retrieveEvenementById.PATH = '/auth/evenement/{id}';
