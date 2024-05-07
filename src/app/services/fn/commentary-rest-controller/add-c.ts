/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Commentary } from '../../models/commentary';

export interface AddC$Params {
  idpub: number;
  idu: number;
      body: Commentary
}

export function addC(http: HttpClient, rootUrl: string, params: AddC$Params, context?: HttpContext): Observable<StrictHttpResponse<Commentary>> {
  const rb = new RequestBuilder(rootUrl, addC.PATH, 'post');
  if (params) {
    rb.path('idpub', params.idpub, {});
    rb.path('idu', params.idu, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Commentary>;
    })
  );
}

addC.PATH = '/auth/addCom/{idu}/{idpub}';
