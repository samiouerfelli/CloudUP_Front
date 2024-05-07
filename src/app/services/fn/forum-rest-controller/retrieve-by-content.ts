/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface RetrieveByContent$Params {
  content: string;
}

export function retrieveByContent(http: HttpClient, rootUrl: string, params: RetrieveByContent$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByContent.PATH, 'get');
  if (params) {
    rb.query('content', params.content, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PublicationDto>>;
    })
  );
}

retrieveByContent.PATH = '/auth/retrieveByContent';
