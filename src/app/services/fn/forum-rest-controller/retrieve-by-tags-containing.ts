/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface RetrieveByTagsContaining$Params {
  tags: string;
}

export function retrieveByTagsContaining(http: HttpClient, rootUrl: string, params: RetrieveByTagsContaining$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByTagsContaining.PATH, 'get');
  if (params) {
    rb.query('tags', params.tags, {});
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

retrieveByTagsContaining.PATH = '/auth/retrieveByTagsP';
