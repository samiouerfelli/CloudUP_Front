/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface RetrieveByIdPub$Params {
  idpub: number;
}

export function retrieveByIdPub(http: HttpClient, rootUrl: string, params: RetrieveByIdPub$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByIdPub.PATH, 'get');
  if (params) {
    rb.path('idpub', params.idpub, {});
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

retrieveByIdPub.PATH = '/auth/retrieveByIdPub/{idpub}';
