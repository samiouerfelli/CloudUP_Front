/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategorieEvenement } from '../../models/categorie-evenement';

export interface AddCategorieEvenement$Params {
      body: CategorieEvenement
}

export function addCategorieEvenement(http: HttpClient, rootUrl: string, params: AddCategorieEvenement$Params, context?: HttpContext): Observable<StrictHttpResponse<CategorieEvenement>> {
  const rb = new RequestBuilder(rootUrl, addCategorieEvenement.PATH, 'post');
  if (params) {
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

addCategorieEvenement.PATH = '/auth/categories/add';
