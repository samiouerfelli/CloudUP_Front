/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPayment } from '../fn/paypal-controller/create-payment';
import { CreatePayment$Params } from '../fn/paypal-controller/create-payment';
import { home } from '../fn/paypal-controller/home';
import { Home$Params } from '../fn/paypal-controller/home';
import { paymentCancel } from '../fn/paypal-controller/payment-cancel';
import { PaymentCancel$Params } from '../fn/paypal-controller/payment-cancel';
import { paymentError } from '../fn/paypal-controller/payment-error';
import { PaymentError$Params } from '../fn/paypal-controller/payment-error';
import { paymentSuccess } from '../fn/paypal-controller/payment-success';
import { PaymentSuccess$Params } from '../fn/paypal-controller/payment-success';
import { RedirectView } from '../models/redirect-view';

@Injectable({ providedIn: 'root' })
export class PaypalControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createPayment()` */
  static readonly CreatePaymentPath = '/auth/payment/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  createPayment$Response(params: CreatePayment$Params, context?: HttpContext): Observable<StrictHttpResponse<RedirectView>> {
    return createPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createPayment(params: CreatePayment$Params, context?: HttpContext): Observable<RedirectView> {
    return this.createPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<RedirectView>): RedirectView => r.body)
    );
  }

  /** Path part for operation `home()` */
  static readonly HomePath = '/auth/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `home()` instead.
   *
   * This method doesn't expect any request body.
   */
  home$Response(params?: Home$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return home(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `home$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  home(params?: Home$Params, context?: HttpContext): Observable<string> {
    return this.home$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `paymentSuccess()` */
  static readonly PaymentSuccessPath = '/auth/Home/students/booking-success';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentSuccess()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSuccess$Response(params: PaymentSuccess$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return paymentSuccess(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paymentSuccess$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentSuccess(params: PaymentSuccess$Params, context?: HttpContext): Observable<string> {
    return this.paymentSuccess$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `paymentError()` */
  static readonly PaymentErrorPath = '/auth/Home/students/booking-error';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentError()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentError$Response(params?: PaymentError$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return paymentError(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paymentError$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentError(params?: PaymentError$Params, context?: HttpContext): Observable<string> {
    return this.paymentError$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `paymentCancel()` */
  static readonly PaymentCancelPath = '/auth/Home/students/booking-cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paymentCancel()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCancel$Response(params?: PaymentCancel$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return paymentCancel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paymentCancel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paymentCancel(params?: PaymentCancel$Params, context?: HttpContext): Observable<string> {
    return this.paymentCancel$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
