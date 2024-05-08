/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaboration } from '../../models/collaboration';

export interface RetrieveObjet1$Params {
  objet: string;
}

export function retrieveObjet1(http: HttpClient, rootUrl: string, params: RetrieveObjet1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
  const rb = new RequestBuilder(rootUrl, retrieveObjet1.PATH, 'get');
  if (params) {
    rb.path('objet', params.objet, {});
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

retrieveObjet1.PATH = '/auth/findobjetrecssssss/{objet}';
