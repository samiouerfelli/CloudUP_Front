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
import { downvoteCommentary1 } from '../fn/commentary-rest-controller/downvote-commentary-1';
import { DownvoteCommentary1$Params } from '../fn/commentary-rest-controller/downvote-commentary-1';
import { getCommentDislikes1 } from '../fn/commentary-rest-controller/get-comment-dislikes-1';
import { GetCommentDislikes1$Params } from '../fn/commentary-rest-controller/get-comment-dislikes-1';
import { getCommentLikes1 } from '../fn/commentary-rest-controller/get-comment-likes-1';
import { GetCommentLikes1$Params } from '../fn/commentary-rest-controller/get-comment-likes-1';
import { getCommentsForUser } from '../fn/commentary-rest-controller/get-comments-for-user';
import { GetCommentsForUser$Params } from '../fn/commentary-rest-controller/get-comments-for-user';
import { retrieveByContent1 } from '../fn/commentary-rest-controller/retrieve-by-content-1';
import { RetrieveByContent1$Params } from '../fn/commentary-rest-controller/retrieve-by-content-1';
import { retrieveByTags } from '../fn/commentary-rest-controller/retrieve-by-tags';
import { RetrieveByTags$Params } from '../fn/commentary-rest-controller/retrieve-by-tags';
import { updateC } from '../fn/commentary-rest-controller/update-c';
import { UpdateC$Params } from '../fn/commentary-rest-controller/update-c';
import { upvoteCommentary1 } from '../fn/commentary-rest-controller/upvote-commentary-1';
import { UpvoteCommentary1$Params } from '../fn/commentary-rest-controller/upvote-commentary-1';

@Injectable({ providedIn: 'root' })
export class CommentaryRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `upvoteCommentary1()` */
  static readonly UpvoteCommentary1Path = '/auth/{commentId}/upvote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upvoteCommentary1()` instead.
   *
   * This method doesn't expect any request body.
   */
  upvoteCommentary1$Response(params: UpvoteCommentary1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return upvoteCommentary1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `upvoteCommentary1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  upvoteCommentary1(params: UpvoteCommentary1$Params, context?: HttpContext): Observable<{
}> {
    return this.upvoteCommentary1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `downvoteCommentary1()` */
  static readonly DownvoteCommentary1Path = '/auth/{commentId}/downvote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downvoteCommentary1()` instead.
   *
   * This method doesn't expect any request body.
   */
  downvoteCommentary1$Response(params: DownvoteCommentary1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return downvoteCommentary1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downvoteCommentary1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downvoteCommentary1(params: DownvoteCommentary1$Params, context?: HttpContext): Observable<{
}> {
    return this.downvoteCommentary1$Response(params, context).pipe(
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

  /** Path part for operation `getCommentLikes1()` */
  static readonly GetCommentLikes1Path = '/auth/{commentId}/likes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentLikes1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikes1$Response(params: GetCommentLikes1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getCommentLikes1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentLikes1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikes1(params: GetCommentLikes1$Params, context?: HttpContext): Observable<number> {
    return this.getCommentLikes1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getCommentDislikes1()` */
  static readonly GetCommentDislikes1Path = '/auth/{commentId}/dislikes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentDislikes1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentDislikes1$Response(params: GetCommentDislikes1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getCommentDislikes1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentDislikes1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentDislikes1(params: GetCommentDislikes1$Params, context?: HttpContext): Observable<number> {
    return this.getCommentDislikes1$Response(params, context).pipe(
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
