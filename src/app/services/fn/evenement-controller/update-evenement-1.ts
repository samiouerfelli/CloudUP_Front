/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Evenement } from '../../models/evenement';

export interface UpdateEvenement1$Params {
  id: number;
      body: Evenement
}

export function updateEvenement1(http: HttpClient, rootUrl: string, params: UpdateEvenement1$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
  const rb = new RequestBuilder(rootUrl, updateEvenement1.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateEvenement1.PATH = '/auth/evenement/update/{id}';
