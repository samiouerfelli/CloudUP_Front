/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Reclamation } from '../../models/reclamation';

export interface RetrieveObjet$Params {
  objet: string;
}

export function retrieveObjet(http: HttpClient, rootUrl: string, params: RetrieveObjet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reclamation>>> {
  const rb = new RequestBuilder(rootUrl, retrieveObjet.PATH, 'get');
  if (params) {
    rb.path('objet', params.objet, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Reclamation>>;
    })
  );
}

retrieveObjet.PATH = '/reclamation/findobjetrec/{objet}';
