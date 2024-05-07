/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetRole$Params {
  idUser: number;
}

export function getRole(http: HttpClient, rootUrl: string, params: GetRole$Params, context?: HttpContext): Observable<StrictHttpResponse<'Professor' | 'Student' | 'Club' | 'Admin'>> {
  const rb = new RequestBuilder(rootUrl, getRole.PATH, 'get');
  if (params) {
    rb.path('idUser', params.idUser, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<'Professor' | 'Student' | 'Club' | 'Admin'>;
    })
  );
}

getRole.PATH = '/auth/getRole/{idUser}';
