/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentaryDto } from '../../models/commentary-dto';

export interface RetrieveByContent1$Params {
  idpub: number;
  content: string;
}

export function retrieveByContent1(http: HttpClient, rootUrl: string, params: RetrieveByContent1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByContent1.PATH, 'get');
  if (params) {
    rb.path('idpub', params.idpub, {});
    rb.query('content', params.content, {});
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

retrieveByContent1.PATH = '/auth/retrieveByContentC/{idpub}';
