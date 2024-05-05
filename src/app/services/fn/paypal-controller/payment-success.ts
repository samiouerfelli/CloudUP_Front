/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface PaymentSuccess$Params {
  paymentId: string;
  payerId: string;
}

export function paymentSuccess(http: HttpClient, rootUrl: string, params: PaymentSuccess$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, paymentSuccess.PATH, 'get');
  if (params) {
    rb.query('paymentId', params.paymentId, {});
    rb.query('payerId', params.payerId, {});
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

paymentSuccess.PATH = '/auth/Home/students/booking-success';
