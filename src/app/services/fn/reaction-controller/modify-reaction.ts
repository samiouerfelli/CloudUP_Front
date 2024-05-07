/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reactions } from '../../models/reactions';

export interface ModifyReaction$Params {
      body: Reactions
}

export function modifyReaction(http: HttpClient, rootUrl: string, params: ModifyReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
  const rb = new RequestBuilder(rootUrl, modifyReaction.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Reactions>;
    })
  );
}

modifyReaction.PATH = '/auth/reaction/modify-reaction';
