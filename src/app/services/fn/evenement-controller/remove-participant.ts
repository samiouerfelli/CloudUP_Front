/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Evenement } from '../../models/evenement';

export interface RemoveParticipant$Params {
  evenementId: number;
  utilisateurId: number;
}

export function removeParticipant(http: HttpClient, rootUrl: string, params: RemoveParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Evenement>> {
  const rb = new RequestBuilder(rootUrl, removeParticipant.PATH, 'delete');
  if (params) {
    rb.path('evenementId', params.evenementId, {});
    rb.path('utilisateurId', params.utilisateurId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Evenement>;
    })
  );
}

removeParticipant.PATH = '/auth/evenement/leave/{evenementId}/{utilisateurId}';
