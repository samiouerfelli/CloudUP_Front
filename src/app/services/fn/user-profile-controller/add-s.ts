/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Speciality } from '../../models/speciality';

export interface AddS$Params {
  id: number;
      body: Speciality
}

export function addS(http: HttpClient, rootUrl: string, params: AddS$Params, context?: HttpContext): Observable<StrictHttpResponse<Speciality>> {
  const rb = new RequestBuilder(rootUrl, addS.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Speciality>;
    })
  );
}

addS.PATH = '/auth/profile/addS/{id}';
