/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieEvenement } from '../../models/categorie-evenement';

export interface UpdateEvenement3$Params {
  id: number;
      body: CategorieEvenement
}

export function updateEvenement3(http: HttpClient, rootUrl: string, params: UpdateEvenement3$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
  const rb = new RequestBuilder(rootUrl, updateEvenement3.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateEvenement3.PATH = '/auth/categories/update/{id}';
