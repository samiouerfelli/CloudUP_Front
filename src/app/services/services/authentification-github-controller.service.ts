/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { callback } from '../fn/authentification-github-controller/callback';
import { Callback$Params } from '../fn/authentification-github-controller/callback';

@Injectable({ providedIn: 'root' })
export class AuthentificationGithubControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `callback()` */
  static readonly CallbackPath = '/auth/callback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `callback()` instead.
   *
   * This method doesn't expect any request body.
   */
  callback$Response(params: Callback$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return callback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `callback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  callback(params: Callback$Params, context?: HttpContext): Observable<string> {
    return this.callback$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
