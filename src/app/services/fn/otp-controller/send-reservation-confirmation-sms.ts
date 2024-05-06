/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OtpResponseDto } from '../../models/otp-response-dto';
import { ReservationResponse } from '../../models/reservation-response';

export interface SendReservationConfirmationSms$Params {
      body: ReservationResponse
}

export function sendReservationConfirmationSms(http: HttpClient, rootUrl: string, params: SendReservationConfirmationSms$Params, context?: HttpContext): Observable<StrictHttpResponse<OtpResponseDto>> {
  const rb = new RequestBuilder(rootUrl, sendReservationConfirmationSms.PATH, 'post');
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

sendReservationConfirmationSms.PATH = '/auth/sendReservationConfirmationSMS';
