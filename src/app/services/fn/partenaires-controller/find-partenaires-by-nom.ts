/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Partenaires } from '../../models/partenaires';

export interface FindPartenairesByNom$Params {
}

export function findPartenairesByNom(http: HttpClient, rootUrl: string, params?: FindPartenairesByNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
  const rb = new RequestBuilder(rootUrl, findPartenairesByNom.PATH, 'get');
  if (params) {
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

findPartenairesByNom.PATH = '/auth/partenairesbyname/{name}';
