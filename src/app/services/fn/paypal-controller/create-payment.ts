/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RedirectView } from '../../models/redirect-view';

export interface CreatePayment$Params {
  method: string;
  amount: string;
  currency: string;
  description: string;
}

export function createPayment(http: HttpClient, rootUrl: string, params: CreatePayment$Params, context?: HttpContext): Observable<StrictHttpResponse<RedirectView>> {
  const rb = new RequestBuilder(rootUrl, createPayment.PATH, 'post');
  if (params) {
    rb.query('method', params.method, {});
    rb.query('amount', params.amount, {});
    rb.query('currency', params.currency, {});
    rb.query('description', params.description, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RedirectView>;
    })
  );
}

createPayment.PATH = '/auth/payment/create';
