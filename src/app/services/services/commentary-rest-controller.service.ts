/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addC } from '../fn/commentary-rest-controller/add-c';
import { AddC$Params } from '../fn/commentary-rest-controller/add-c';
import { Commentary } from '../models/commentary';
import { CommentaryDto } from '../models/commentary-dto';
import { deleteC } from '../fn/commentary-rest-controller/delete-c';
import { DeleteC$Params } from '../fn/commentary-rest-controller/delete-c';
import { downvoteCommentary } from '../fn/commentary-rest-controller/downvote-commentary';
import { DownvoteCommentary$Params } from '../fn/commentary-rest-controller/downvote-commentary';
import { getCommentDislikes } from '../fn/commentary-rest-controller/get-comment-dislikes';
import { GetCommentDislikes$Params } from '../fn/commentary-rest-controller/get-comment-dislikes';
import { getCommentLikes } from '../fn/commentary-rest-controller/get-comment-likes';
import { GetCommentLikes$Params } from '../fn/commentary-rest-controller/get-comment-likes';
import { getCommentsForUser } from '../fn/commentary-rest-controller/get-comments-for-user';
import { GetCommentsForUser$Params } from '../fn/commentary-rest-controller/get-comments-for-user';
import { retrieveByContent1 } from '../fn/commentary-rest-controller/retrieve-by-content-1';
import { RetrieveByContent1$Params } from '../fn/commentary-rest-controller/retrieve-by-content-1';
import { retrieveByTags } from '../fn/commentary-rest-controller/retrieve-by-tags';
import { RetrieveByTags$Params } from '../fn/commentary-rest-controller/retrieve-by-tags';
import { updateC } from '../fn/commentary-rest-controller/update-c';
import { UpdateC$Params } from '../fn/commentary-rest-controller/update-c';
import { upvoteCommentary } from '../fn/commentary-rest-controller/upvote-commentary';
import { UpvoteCommentary$Params } from '../fn/commentary-rest-controller/upvote-commentary';

@Injectable({ providedIn: 'root' })
export class CommentaryRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `upvoteCommentary()` */
  static readonly UpvoteCommentaryPath = '/auth/{commentId}/upvote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upvoteCommentary()` instead.
   *
   * This method doesn't expect any request body.
   */
  upvoteCommentary$Response(params: UpvoteCommentary$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return upvoteCommentary(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `upvoteCommentary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  upvoteCommentary(params: UpvoteCommentary$Params, context?: HttpContext): Observable<{
}> {
    return this.upvoteCommentary$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `downvoteCommentary()` */
  static readonly DownvoteCommentaryPath = '/auth/{commentId}/downvote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downvoteCommentary()` instead.
   *
   * This method doesn't expect any request body.
   */
  downvoteCommentary$Response(params: DownvoteCommentary$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return downvoteCommentary(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downvoteCommentary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downvoteCommentary(params: DownvoteCommentary$Params, context?: HttpContext): Observable<{
}> {
    return this.downvoteCommentary$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateC()` */
  static readonly UpdateCPath = '/auth/updateC';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateC()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateC$Response(params: UpdateC$Params, context?: HttpContext): Observable<StrictHttpResponse<Commentary>> {
    return updateC(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateC$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateC(params: UpdateC$Params, context?: HttpContext): Observable<Commentary> {
    return this.updateC$Response(params, context).pipe(
      map((r: StrictHttpResponse<Commentary>): Commentary => r.body)
    );
  }

  /** Path part for operation `addC()` */
  static readonly AddCPath = '/auth/addCom/{idu}/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addC()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addC$Response(params: AddC$Params, context?: HttpContext): Observable<StrictHttpResponse<Commentary>> {
    return addC(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addC$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addC(params: AddC$Params, context?: HttpContext): Observable<Commentary> {
    return this.addC$Response(params, context).pipe(
      map((r: StrictHttpResponse<Commentary>): Commentary => r.body)
    );
  }

  /** Path part for operation `getCommentLikes()` */
  static readonly GetCommentLikesPath = '/auth/{commentId}/likes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentLikes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikes$Response(params: GetCommentLikes$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getCommentLikes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentLikes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikes(params: GetCommentLikes$Params, context?: HttpContext): Observable<number> {
    return this.getCommentLikes$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getCommentDislikes()` */
  static readonly GetCommentDislikesPath = '/auth/{commentId}/dislikes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentDislikes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentDislikes$Response(params: GetCommentDislikes$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getCommentDislikes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentDislikes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentDislikes(params: GetCommentDislikes$Params, context?: HttpContext): Observable<number> {
    return this.getCommentDislikes$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `retrieveByTags()` */
  static readonly RetrieveByTagsPath = '/auth/retrieveByTagsC/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByTags$Response(params: RetrieveByTags$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
    return retrieveByTags(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByTags(params: RetrieveByTags$Params, context?: HttpContext): Observable<Array<CommentaryDto>> {
    return this.retrieveByTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentaryDto>>): Array<CommentaryDto> => r.body)
    );
  }

  /** Path part for operation `retrieveByContent1()` */
  static readonly RetrieveByContent1Path = '/auth/retrieveByContentC/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByContent1()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByContent1$Response(params: RetrieveByContent1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
    return retrieveByContent1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByContent1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByContent1(params: RetrieveByContent1$Params, context?: HttpContext): Observable<Array<CommentaryDto>> {
    return this.retrieveByContent1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentaryDto>>): Array<CommentaryDto> => r.body)
    );
  }

  /** Path part for operation `getCommentsForUser()` */
  static readonly GetCommentsForUserPath = '/auth/comments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForUser$Response(params: GetCommentsForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCommentsForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForUser(params: GetCommentsForUser$Params, context?: HttpContext): Observable<string> {
    return this.getCommentsForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteC()` */
  static readonly DeleteCPath = '/auth/deleteC/{idC}/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteC()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteC$Response(params: DeleteC$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteC(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteC$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteC(params: DeleteC$Params, context?: HttpContext): Observable<void> {
    return this.deleteC$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
