/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OtpResponseDto } from '../../models/otp-response-dto';
import { ReservationResponse } from '../../models/reservation-response';

export interface SendReservationCancelationSms$Params {
      body: ReservationResponse
}

export function sendReservationCancelationSms(http: HttpClient, rootUrl: string, params: SendReservationCancelationSms$Params, context?: HttpContext): Observable<StrictHttpResponse<OtpResponseDto>> {
  const rb = new RequestBuilder(rootUrl, sendReservationCancelationSms.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OtpResponseDto>;
    })
  );
}

sendReservationCancelationSms.PATH = '/auth/sendReservationCancelationSMS';
