/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface RetrieveAll_1$Params {
}

export function retrieveAll_1(http: HttpClient, rootUrl: string, params?: RetrieveAll_1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveAll_1.PATH, 'get');
  if (params) {
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

retrieveAll_1.PATH = '/auth/retrieveAllPofForum';
