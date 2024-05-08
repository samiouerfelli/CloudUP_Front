/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Partenaires } from '../../models/partenaires';

export interface FindPartenairesById$Params {
  id: number;
}

export function findPartenairesById(http: HttpClient, rootUrl: string, params: FindPartenairesById$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
  const rb = new RequestBuilder(rootUrl, findPartenairesById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Partenaires>;
    })
  );
}

findPartenairesById.PATH = '/auth/partenaires/{id}';
