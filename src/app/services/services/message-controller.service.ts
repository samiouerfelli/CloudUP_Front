/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getPrivateChat } from '../fn/message-controller/get-private-chat';
import { GetPrivateChat$Params } from '../fn/message-controller/get-private-chat';
import { PrivateChat } from '../models/private-chat';
import { sendPrivateMessage } from '../fn/message-controller/send-private-message';
import { SendPrivateMessage$Params } from '../fn/message-controller/send-private-message';
import { sendPrivateMessage1 } from '../fn/message-controller/send-private-message-1';
import { SendPrivateMessage1$Params } from '../fn/message-controller/send-private-message-1';

@Injectable({ providedIn: 'root' })
export class MessageControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sendPrivateMessage()` */
  static readonly SendPrivateMessagePath = '/reclamation/send-private-message/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendPrivateMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPrivateMessage$Response(params: SendPrivateMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendPrivateMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendPrivateMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPrivateMessage(params: SendPrivateMessage$Params, context?: HttpContext): Observable<void> {
    return this.sendPrivateMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sendPrivateMessage1()` */
  static readonly SendPrivateMessage1Path = '/reclamation/vu-message/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendPrivateMessage1()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendPrivateMessage1$Response(params: SendPrivateMessage1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendPrivateMessage1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendPrivateMessage1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendPrivateMessage1(params: SendPrivateMessage1$Params, context?: HttpContext): Observable<void> {
    return this.sendPrivateMessage1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getPrivateChat()` */
  static readonly GetPrivateChatPath = '/reclamation/get-private-chat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPrivateChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPrivateChat$Response(params?: GetPrivateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PrivateChat>>> {
    return getPrivateChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPrivateChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPrivateChat(params?: GetPrivateChat$Params, context?: HttpContext): Observable<Array<PrivateChat>> {
    return this.getPrivateChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PrivateChat>>): Array<PrivateChat> => r.body)
    );
  }

}
