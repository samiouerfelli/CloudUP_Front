/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentaryDto } from '../../models/commentary-dto';

export interface RetrieveAllC1$Params {
  idpub: number;
}

export function retrieveAllC1(http: HttpClient, rootUrl: string, params: RetrieveAllC1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveAllC1.PATH, 'get');
  if (params) {
    rb.path('idpub', params.idpub, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommentaryDto>>;
    })
  );
}

retrieveAllC1.PATH = '/auth/retrieveALLC/{idpub}';
