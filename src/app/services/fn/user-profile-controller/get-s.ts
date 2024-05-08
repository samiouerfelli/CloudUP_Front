/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Speciality } from '../../models/speciality';

export interface GetS$Params {
  id: number;
}

export function getS(http: HttpClient, rootUrl: string, params: GetS$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Speciality>>> {
  const rb = new RequestBuilder(rootUrl, getS.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Speciality>>;
    })
  );
}

getS.PATH = '/auth/profile/getS/{id}';
