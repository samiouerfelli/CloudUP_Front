/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CoursParticuliers } from '../../models/cours-particuliers';

export interface GetTopCourses$Params {
}

export function getTopCourses(http: HttpClient, rootUrl: string, params?: GetTopCourses$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CoursParticuliers>>> {
  const rb = new RequestBuilder(rootUrl, getTopCourses.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CoursParticuliers>>;
    })
  );
}

getTopCourses.PATH = '/auth/getTopCourses';
