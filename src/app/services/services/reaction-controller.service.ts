/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addReaction } from '../fn/reaction-controller/add-reaction';
import { AddReaction$Params } from '../fn/reaction-controller/add-reaction';
import { countReactionsByPost } from '../fn/reaction-controller/count-reactions-by-post';
import { CountReactionsByPost$Params } from '../fn/reaction-controller/count-reactions-by-post';
import { getReactionByPostAndUser } from '../fn/reaction-controller/get-reaction-by-post-and-user';
import { GetReactionByPostAndUser$Params } from '../fn/reaction-controller/get-reaction-by-post-and-user';
import { getReactions } from '../fn/reaction-controller/get-reactions';
import { GetReactions$Params } from '../fn/reaction-controller/get-reactions';
import { modifyReaction } from '../fn/reaction-controller/modify-reaction';
import { ModifyReaction$Params } from '../fn/reaction-controller/modify-reaction';
import { Reactions } from '../models/reactions';
import { removeReaction } from '../fn/reaction-controller/remove-reaction';
import { RemoveReaction$Params } from '../fn/reaction-controller/remove-reaction';
import { retrieveReaction } from '../fn/reaction-controller/retrieve-reaction';
import { RetrieveReaction$Params } from '../fn/reaction-controller/retrieve-reaction';

@Injectable({ providedIn: 'root' })
export class ReactionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifyReaction()` */
  static readonly ModifyReactionPath = '/auth/reaction/modify-reaction';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifyReaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifyReaction$Response(params: ModifyReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
    return modifyReaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifyReaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifyReaction(params: ModifyReaction$Params, context?: HttpContext): Observable<Reactions> {
    return this.modifyReaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reactions>): Reactions => r.body)
    );
  }

  /** Path part for operation `addReaction()` */
  static readonly AddReactionPath = '/auth/reaction/add-reaction/{post-id}/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReaction$Response(params: AddReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
    return addReaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReaction(params: AddReaction$Params, context?: HttpContext): Observable<Reactions> {
    return this.addReaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reactions>): Reactions => r.body)
    );
  }

  /** Path part for operation `retrieveReaction()` */
  static readonly RetrieveReactionPath = '/auth/reaction/retrieve-reaction/{reaction-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveReaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReaction$Response(params: RetrieveReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
    return retrieveReaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveReaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveReaction(params: RetrieveReaction$Params, context?: HttpContext): Observable<Reactions> {
    return this.retrieveReaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reactions>): Reactions => r.body)
    );
  }

  /** Path part for operation `getReactions()` */
  static readonly GetReactionsPath = '/auth/reaction/retrieve-all-reactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReactions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReactions$Response(params?: GetReactions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Reactions>>> {
    return getReactions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReactions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReactions(params?: GetReactions$Params, context?: HttpContext): Observable<Array<Reactions>> {
    return this.getReactions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Reactions>>): Array<Reactions> => r.body)
    );
  }

  /** Path part for operation `getReactionByPostAndUser()` */
  static readonly GetReactionByPostAndUserPath = '/auth/reaction/get-reaction/{post-id}/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReactionByPostAndUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReactionByPostAndUser$Response(params: GetReactionByPostAndUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Reactions>> {
    return getReactionByPostAndUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReactionByPostAndUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReactionByPostAndUser(params: GetReactionByPostAndUser$Params, context?: HttpContext): Observable<Reactions> {
    return this.getReactionByPostAndUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Reactions>): Reactions => r.body)
    );
  }

  /** Path part for operation `countReactionsByPost()` */
  static readonly CountReactionsByPostPath = '/auth/reaction/count-reaction/{post-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countReactionsByPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  countReactionsByPost$Response(params: CountReactionsByPost$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countReactionsByPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countReactionsByPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countReactionsByPost(params: CountReactionsByPost$Params, context?: HttpContext): Observable<number> {
    return this.countReactionsByPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `removeReaction()` */
  static readonly RemoveReactionPath = '/auth/reaction/remove-reaction/{reaction-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeReaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeReaction$Response(params: RemoveReaction$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeReaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeReaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeReaction(params: RemoveReaction$Params, context?: HttpContext): Observable<void> {
    return this.removeReaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
