/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieEvenement } from '../../models/categorie-evenement';

export interface RetrieveCategorieEvenementById$Params {
  id: number;
}

export function retrieveCategorieEvenementById(http: HttpClient, rootUrl: string, params: RetrieveCategorieEvenementById$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
  const rb = new RequestBuilder(rootUrl, retrieveCategorieEvenementById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategorieEvenement>;
    })
  );
}

retrieveCategorieEvenementById.PATH = '/auth/categories/{id}';
