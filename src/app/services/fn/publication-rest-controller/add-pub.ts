/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Publication } from '../../models/publication';

export interface AddPub$Params {
  idf: number;
  idu: number;
      body: Publication
}

export function addPub(http: HttpClient, rootUrl: string, params: AddPub$Params, context?: HttpContext): Observable<StrictHttpResponse<Publication>> {
  const rb = new RequestBuilder(rootUrl, addPub.PATH, 'post');
  if (params) {
    rb.path('idf', params.idf, {});
    rb.path('idu', params.idu, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Publication>;
    })
  );
}

addPub.PATH = '/auth/{idu}/{idf}/addPub';
