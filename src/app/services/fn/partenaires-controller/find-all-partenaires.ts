/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Partenaires } from '../../models/partenaires';

export interface FindAllPartenaires$Params {
}

export function findAllPartenaires(http: HttpClient, rootUrl: string, params?: FindAllPartenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Partenaires>>> {
  const rb = new RequestBuilder(rootUrl, findAllPartenaires.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Partenaires>>;
    })
  );
}

findAllPartenaires.PATH = '/auth/partenaires';
