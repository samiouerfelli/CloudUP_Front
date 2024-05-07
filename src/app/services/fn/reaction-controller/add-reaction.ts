/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reactions } from '../../models/reactions';

export interface AddReaction$Params {
  'post-id': number;
  'user-id': number;
      body: Reactions
}

export function addReaction(http: HttpClient, rootUrl: string, params: AddReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
  const rb = new RequestBuilder(rootUrl, addReaction.PATH, 'post');
  if (params) {
    rb.path('post-id', params['post-id'], {});
    rb.path('user-id', params['user-id'], {});
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

addReaction.PATH = '/auth/reaction/add-reaction/{post-id}/{user-id}';
