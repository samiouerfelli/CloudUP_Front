/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Partenaires } from '../../models/partenaires';

export interface AddPartenaires$Params {
      body: Partenaires
}

export function addPartenaires(http: HttpClient, rootUrl: string, params: AddPartenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<Partenaires>> {
  const rb = new RequestBuilder(rootUrl, addPartenaires.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

addPartenaires.PATH = '/auth/addPartenaires';
