/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Evenement } from '../../models/evenement';

export interface RetrieveAllEvenements$Params {
}

export function retrieveAllEvenements(http: HttpClient, rootUrl: string, params?: RetrieveAllEvenements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Evenement>>> {
  const rb = new RequestBuilder(rootUrl, retrieveAllEvenements.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Evenement>>;
    })
  );
}

retrieveAllEvenements.PATH = '/auth/evenement/all';
