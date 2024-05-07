/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPub } from '../fn/publication-rest-controller/add-pub';
import { AddPub$Params } from '../fn/publication-rest-controller/add-pub';
import { CommentaryDto } from '../models/commentary-dto';
import { deletePub } from '../fn/publication-rest-controller/delete-pub';
import { DeletePub$Params } from '../fn/publication-rest-controller/delete-pub';
import { incrementViewsForPublication } from '../fn/publication-rest-controller/increment-views-for-publication';
import { IncrementViewsForPublication$Params } from '../fn/publication-rest-controller/increment-views-for-publication';
import { markSolutionAndClosePublication } from '../fn/publication-rest-controller/mark-solution-and-close-publication';
import { MarkSolutionAndClosePublication$Params } from '../fn/publication-rest-controller/mark-solution-and-close-publication';
import { Publication } from '../models/publication';
import { retrieveAllC1 } from '../fn/publication-rest-controller/retrieve-all-c-1';
import { RetrieveAllC1$Params } from '../fn/publication-rest-controller/retrieve-all-c-1';
import { retrievePubByUser } from '../fn/publication-rest-controller/retrieve-pub-by-user';
import { RetrievePubByUser$Params } from '../fn/publication-rest-controller/retrieve-pub-by-user';
import { updatePub } from '../fn/publication-rest-controller/update-pub';
import { UpdatePub$Params } from '../fn/publication-rest-controller/update-pub';
import { uploadImage } from '../fn/publication-rest-controller/upload-image';
import { UploadImage$Params } from '../fn/publication-rest-controller/upload-image';

@Injectable({ providedIn: 'root' })
export class PublicationRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePub()` */
  static readonly UpdatePubPath = '/auth/updatePub';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePub()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePub$Response(params: UpdatePub$Params, context?: HttpContext): Observable<StrictHttpResponse<Publication>> {
    return updatePub(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePub$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePub(params: UpdatePub$Params, context?: HttpContext): Observable<Publication> {
    return this.updatePub$Response(params, context).pipe(
      map((r: StrictHttpResponse<Publication>): Publication => r.body)
    );
  }

  /** Path part for operation `incrementViewsForPublication()` */
  static readonly IncrementViewsForPublicationPath = '/auth/publications/{id}/increment-views';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementViewsForPublication()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementViewsForPublication$Response(params: IncrementViewsForPublication$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return incrementViewsForPublication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incrementViewsForPublication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementViewsForPublication(params: IncrementViewsForPublication$Params, context?: HttpContext): Observable<{
}> {
    return this.incrementViewsForPublication$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `markSolutionAndClosePublication()` */
  static readonly MarkSolutionAndClosePublicationPath = '/auth/mark-solution-and-close';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `markSolutionAndClosePublication()` instead.
   *
   * This method doesn't expect any request body.
   */
  markSolutionAndClosePublication$Response(params?: MarkSolutionAndClosePublication$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return markSolutionAndClosePublication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `markSolutionAndClosePublication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  markSolutionAndClosePublication(params?: MarkSolutionAndClosePublication$Params, context?: HttpContext): Observable<string> {
    return this.markSolutionAndClosePublication$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addPub()` */
  static readonly AddPubPath = '/auth/{idu}/{idf}/addPub';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPub()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPub$Response(params: AddPub$Params, context?: HttpContext): Observable<StrictHttpResponse<Publication>> {
    return addPub(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPub$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPub(params: AddPub$Params, context?: HttpContext): Observable<Publication> {
    return this.addPub$Response(params, context).pipe(
      map((r: StrictHttpResponse<Publication>): Publication => r.body)
    );
  }

  /** Path part for operation `uploadImage()` */
  static readonly UploadImagePath = '/auth/upload/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImage$Response(params: UploadImage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return uploadImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadImage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadImage(params: UploadImage$Params, context?: HttpContext): Observable<void> {
    return this.uploadImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `retrievePubByUser()` */
  static readonly RetrievePubByUserPath = '/auth/retrieveByUser/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrievePubByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrievePubByUser$Response(params: RetrievePubByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Publication>>> {
    return retrievePubByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrievePubByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrievePubByUser(params: RetrievePubByUser$Params, context?: HttpContext): Observable<Array<Publication>> {
    return this.retrievePubByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Publication>>): Array<Publication> => r.body)
    );
  }

  /** Path part for operation `retrieveAllC1()` */
  static readonly RetrieveAllC1Path = '/auth/retrieveALLC/{idpub}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveAllC1()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllC1$Response(params: RetrieveAllC1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentaryDto>>> {
    return retrieveAllC1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveAllC1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveAllC1(params: RetrieveAllC1$Params, context?: HttpContext): Observable<Array<CommentaryDto>> {
    return this.retrieveAllC1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentaryDto>>): Array<CommentaryDto> => r.body)
    );
  }

  /** Path part for operation `deletePub()` */
  static readonly DeletePubPath = '/auth/deletePub/{idP}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePub()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePub$Response(params: DeletePub$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePub(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePub$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePub(params: DeletePub$Params, context?: HttpContext): Observable<void> {
    return this.deletePub$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
