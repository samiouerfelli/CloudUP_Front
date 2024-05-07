/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addForum } from '../fn/forum-rest-controller/add-forum';
import { AddForum$Params } from '../fn/forum-rest-controller/add-forum';
import { deleteForum } from '../fn/forum-rest-controller/delete-forum';
import { DeleteForum$Params } from '../fn/forum-rest-controller/delete-forum';
import { Forum } from '../models/forum';
import { PublicationDto } from '../models/publication-dto';
import { retrieveAll_1 } from '../fn/forum-rest-controller/retrieve-all-1';
import { RetrieveAll_1$Params } from '../fn/forum-rest-controller/retrieve-all-1';
import { retrieveByCategories } from '../fn/forum-rest-controller/retrieve-by-categories';
import { RetrieveByCategories$Params } from '../fn/forum-rest-controller/retrieve-by-categories';
import { retrieveByContent } from '../fn/forum-rest-controller/retrieve-by-content';
import { RetrieveByContent$Params } from '../fn/forum-rest-controller/retrieve-by-content';
import { retrieveByIdPub } from '../fn/forum-rest-controller/retrieve-by-id-pub';
import { RetrieveByIdPub$Params } from '../fn/forum-rest-controller/retrieve-by-id-pub';
import { retrieveBySubject } from '../fn/forum-rest-controller/retrieve-by-subject';
import { RetrieveBySubject$Params } from '../fn/forum-rest-controller/retrieve-by-subject';
import { retrieveByTagsContaining } from '../fn/forum-rest-controller/retrieve-by-tags-containing';
import { RetrieveByTagsContaining$Params } from '../fn/forum-rest-controller/retrieve-by-tags-containing';

@Injectable({ providedIn: 'root' })
export class ForumRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addForum()` */
  static readonly AddForumPath = '/auth/addForum';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addForum()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addForum$Response(params: AddForum$Params, context?: HttpContext): Observable<StrictHttpResponse<Forum>> {
    return addForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addForum$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addForum(params: AddForum$Params, context?: HttpContext): Observable<Forum> {
    return this.addForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<Forum>): Forum => r.body)
    );
  }

  /** Path part for operation `retrieveByTagsContaining()` */
  static readonly RetrieveByTagsContainingPath = '/auth/retrieveByTagsP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByTagsContaining()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByTagsContaining$Response(params: RetrieveByTagsContaining$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveByTagsContaining(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByTagsContaining$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByTagsContaining(params: RetrieveByTagsContaining$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveByTagsContaining$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `retrieveBySubject()` */
  static readonly RetrieveBySubjectPath = '/auth/retrieveBySubject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveBySubject()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveBySubject$Response(params: RetrieveBySubject$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveBySubject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveBySubject$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveBySubject(params: RetrieveBySubject$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveBySubject$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `retrieveByIdPub()` */
  static readonly RetrieveByIdPubPath = '/auth/retrieveByIdPub/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByIdPub()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdPub$Response(params: RetrieveByIdPub$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveByIdPub(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByIdPub$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdPub(params: RetrieveByIdPub$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveByIdPub$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `retrieveByContent()` */
  static readonly RetrieveByContentPath = '/auth/retrieveByContent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByContent$Response(params: RetrieveByContent$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveByContent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByContent(params: RetrieveByContent$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveByContent$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `retrieveByCategories()` */
  static readonly RetrieveByCategoriesPath = '/auth/retrieveByCategories/{categories}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByCategories$Response(params: RetrieveByCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveByCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByCategories(params: RetrieveByCategories$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveByCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `retrieveAll_1()` */
  static readonly RetrieveAll_1Path = '/auth/retrieveAllPofForum';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAll_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAll_1$Response(params?: RetrieveAll_1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PublicationDto>>> {
    return retrieveAll_1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAll_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAll_1(params?: RetrieveAll_1$Params, context?: HttpContext): Observable<Array<PublicationDto>> {
    return this.retrieveAll_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PublicationDto>>): Array<PublicationDto> => r.body)
    );
  }

  /** Path part for operation `deleteForum()` */
  static readonly DeleteForumPath = '/auth/deleteForum/{idf}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteForum()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum$Response(params: DeleteForum$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteForum(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteForum$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForum(params: DeleteForum$Params, context?: HttpContext): Observable<void> {
    return this.deleteForum$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
