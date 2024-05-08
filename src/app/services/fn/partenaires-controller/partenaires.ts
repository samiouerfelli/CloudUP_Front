/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Partenaires$Params {
  nom: string;
  descpart: string;
      body?: {
'file': Blob;
}
}

export function partenaires(http: HttpClient, rootUrl: string, params: Partenaires$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, partenaires.PATH, 'post');
  if (params) {
    rb.query('nom', params.nom, {});
    rb.query('descpart', params.descpart, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

partenaires.PATH = '/auth/addP';
