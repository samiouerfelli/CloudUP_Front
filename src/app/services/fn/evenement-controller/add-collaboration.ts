/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AddCollaboration$Params {
  nom: string;
  description: string;
  datedebut: string;
  datefin: string;
  lieu: string;
  maxparticipant: number;
  organisateur_id_user: number;
  categorie_id: number;
      body?: {
'file': Blob;
}
}

export function addCollaboration(http: HttpClient, rootUrl: string, params: AddCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, addCollaboration.PATH, 'post');
  if (params) {
    rb.query('nom', params.nom, {});
    rb.query('description', params.description, {});
    rb.query('datedebut', params.datedebut, {});
    rb.query('datefin', params.datefin, {});
    rb.query('lieu', params.lieu, {});
    rb.query('maxparticipant', params.maxparticipant, {});
    rb.query('organisateur_id_user', params.organisateur_id_user, {});
    rb.query('categorie_id', params.categorie_id, {});
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

addCollaboration.PATH = '/auth/evenement/add2';
