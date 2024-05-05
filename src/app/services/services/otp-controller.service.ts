/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { OtpResponseDto } from '../models/otp-response-dto';
import { processSms } from '../fn/otp-controller/process-sms';
import { ProcessSms$Params } from '../fn/otp-controller/process-sms';
import { sendReservationCancelationSms } from '../fn/otp-controller/send-reservation-cancelation-sms';
import { SendReservationCancelationSms$Params } from '../fn/otp-controller/send-reservation-cancelation-sms';
import { sendReservationConfirmationSms } from '../fn/otp-controller/send-reservation-confirmation-sms';
import { SendReservationConfirmationSms$Params } from '../fn/otp-controller/send-reservation-confirmation-sms';
import { sendReservationDetails } from '../fn/otp-controller/send-reservation-details';
import { SendReservationDetails$Params } from '../fn/otp-controller/send-reservation-details';

@Injectable({ providedIn: 'root' })
export class OtpControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sendReservationConfirmationSms()` */
  static readonly SendReservationConfirmationSmsPath = '/auth/sendReservationConfirmationSMS';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendReservationConfirmationSms()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationConfirmationSms$Response(params: SendReservationConfirmationSms$Params, context?: HttpContext): Observable<StrictHttpResponse<OtpResponseDto>> {
    return sendReservationConfirmationSms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendReservationConfirmationSms$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationConfirmationSms(params: SendReservationConfirmationSms$Params, context?: HttpContext): Observable<OtpResponseDto> {
    return this.sendReservationConfirmationSms$Response(params, context).pipe(
      map((r: StrictHttpResponse<OtpResponseDto>): OtpResponseDto => r.body)
    );
  }

  /** Path part for operation `sendReservationCancelationSms()` */
  static readonly SendReservationCancelationSmsPath = '/auth/sendReservationCancelationSMS';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendReservationCancelationSms()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationCancelationSms$Response(params: SendReservationCancelationSms$Params, context?: HttpContext): Observable<StrictHttpResponse<OtpResponseDto>> {
    return sendReservationCancelationSms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendReservationCancelationSms$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationCancelationSms(params: SendReservationCancelationSms$Params, context?: HttpContext): Observable<OtpResponseDto> {
    return this.sendReservationCancelationSms$Response(params, context).pipe(
      map((r: StrictHttpResponse<OtpResponseDto>): OtpResponseDto => r.body)
    );
  }

  /** Path part for operation `sendReservationDetails()` */
  static readonly SendReservationDetailsPath = '/auth/send-reservation-details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendReservationDetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationDetails$Response(params: SendReservationDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<OtpResponseDto>> {
    return sendReservationDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendReservationDetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendReservationDetails(params: SendReservationDetails$Params, context?: HttpContext): Observable<OtpResponseDto> {
    return this.sendReservationDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<OtpResponseDto>): OtpResponseDto => r.body)
    );
  }

  /** Path part for operation `processSms()` */
  static readonly ProcessSmsPath = '/auth/process';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processSms()` instead.
   *
   * This method doesn't expect any request body.
   */
  processSms$Response(params?: ProcessSms$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return processSms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processSms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  processSms(params?: ProcessSms$Params, context?: HttpContext): Observable<string> {
    return this.processSms$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
