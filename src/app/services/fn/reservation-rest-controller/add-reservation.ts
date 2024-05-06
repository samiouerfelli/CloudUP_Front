/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CoursParticuliers } from '../../models/cours-particuliers';
import { Reservation } from '../../models/reservation';
import { User } from '../../models/user';

export interface AddReservation$Params {
  etudiantID: User;
  coursID: CoursParticuliers;
      body: Reservation
}

export function addReservation(http: HttpClient, rootUrl: string, params: AddReservation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, addReservation.PATH, 'post');
  if (params) {
    rb.query('etudiantID', params.etudiantID, {});
    rb.query('coursID', params.coursID, {});
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

addReservation.PATH = '/auth/addReservation';
