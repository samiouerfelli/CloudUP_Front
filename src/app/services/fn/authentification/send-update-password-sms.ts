/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserUpdatePwdRequest } from '../../models/user-update-pwd-request';

export interface SendUpdatePasswordSms$Params {
      body: UserUpdatePwdRequest
}

export function sendUpdatePasswordSms(http: HttpClient, rootUrl: string, params: SendUpdatePasswordSms$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, sendUpdatePasswordSms.PATH, 'post');
  if (params) {
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

sendUpdatePasswordSms.PATH = '/auth/sendUpdatePasswordSMS';
