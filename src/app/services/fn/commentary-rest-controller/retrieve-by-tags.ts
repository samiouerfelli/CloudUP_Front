/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentaryDto } from '../../models/commentary-dto';

export interface RetrieveByTags$Params {
  idpub: number;
  tags: string;
}

export function retrieveByTags(http: HttpClient, rootUrl: string, params: RetrieveByTags$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByTags.PATH, 'get');
  if (params) {
    rb.path('idpub', params.idpub, {});
    rb.query('tags', params.tags, {});
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

retrieveByTags.PATH = '/auth/retrieveByTagsC/{idpub}';
