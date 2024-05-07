/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AddCollaboration2$Params {
  nomcol: string;
  desccol: string;
  datecol: string;
  placecol: string;
  prixcol: number;
  partenaires_id_part: number;
  nbrres: number;
  user_id_user: number;
      body?: {
'file': Blob;
}
}

export function addCollaboration2(http: HttpClient, rootUrl: string, params: AddCollaboration2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, addCollaboration2.PATH, 'post');
  if (params) {
    rb.query('nomcol', params.nomcol, {});
    rb.query('desccol', params.desccol, {});
    rb.query('datecol', params.datecol, {});
    rb.query('placecol', params.placecol, {});
    rb.query('prixcol', params.prixcol, {});
    rb.query('partenaires_id_part', params.partenaires_id_part, {});
    rb.query('nbrres', params.nbrres, {});
    rb.query('user_id_user', params.user_id_user, {});
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

addCollaboration2.PATH = '/auth/addColbeltaswira';
