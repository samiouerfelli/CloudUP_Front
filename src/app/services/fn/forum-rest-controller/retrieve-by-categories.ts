/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PublicationDto } from '../../models/publication-dto';

export interface RetrieveByCategories$Params {
  categories: 'CIVIL_ENGINEERING' | 'SOFTWARE_ENGINEERING' | 'ELECTRICAL_ENGINEERING' | 'MATERIAL_SCIENCE' | 'ELECTRONICS' | 'ROBOTICS' | 'EMBEDDED_SYSTEMS' | 'RENEWABLE_ENERGY' | 'ARTIFICIAL_INTELLIGENCE' | 'STUDY_TIPS' | 'UNIVERSITY_DETAILS' | 'COURSE_DETAILS';
}

export function retrieveByCategories(http: HttpClient, rootUrl: string, params: RetrieveByCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
  const rb = new RequestBuilder(rootUrl, retrieveByCategories.PATH, 'get');
  if (params) {
    rb.path('categories', params.categories, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PublicationDto>>;
    })
  );
}

retrieveByCategories.PATH = '/auth/retrieveByCategories/{categories}';
