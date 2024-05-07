/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Publication } from '../../models/publication';

export interface RetrievePubByUser$Params {
  idUser: number;
}

export function retrievePubByUser(http: HttpClient, rootUrl: string, params: RetrievePubByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Publication>>> {
  const rb = new RequestBuilder(rootUrl, retrievePubByUser.PATH, 'get');
  if (params) {
    rb.path('idUser', params.idUser, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Publication>>;
    })
  );
}

retrievePubByUser.PATH = '/auth/retrieveByUser/{idUser}';
