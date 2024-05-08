/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCollaboration1 } from '../fn/collaboration-controller/add-collaboration-1';
import { AddCollaboration1$Params } from '../fn/collaboration-controller/add-collaboration-1';
import { addCollaboration2 } from '../fn/collaboration-controller/add-collaboration-2';
import { AddCollaboration2$Params } from '../fn/collaboration-controller/add-collaboration-2';
import { addCollaborationsssssss } from '../fn/collaboration-controller/add-collaborationsssssss';
import { AddCollaborationsssssss$Params } from '../fn/collaboration-controller/add-collaborationsssssss';
import { Collaboration } from '../models/collaboration';
import { deleteCollaboration } from '../fn/collaboration-controller/delete-collaboration';
import { DeleteCollaboration$Params } from '../fn/collaboration-controller/delete-collaboration';
import { downnumber } from '../fn/collaboration-controller/downnumber';
import { Downnumber$Params } from '../fn/collaboration-controller/downnumber';
import { downvoteCommentary } from '../fn/collaboration-controller/downvote-commentary';
import { DownvoteCommentary$Params } from '../fn/collaboration-controller/downvote-commentary';
import { findAll } from '../fn/collaboration-controller/find-all';
import { FindAll$Params } from '../fn/collaboration-controller/find-all';
import { getAllPagination1 } from '../fn/collaboration-controller/get-all-pagination-1';
import { GetAllPagination1$Params } from '../fn/collaboration-controller/get-all-pagination-1';
import { getCommentDislikes } from '../fn/collaboration-controller/get-comment-dislikes';
import { GetCommentDislikes$Params } from '../fn/collaboration-controller/get-comment-dislikes';
import { getCommentLikes } from '../fn/collaboration-controller/get-comment-likes';
import { GetCommentLikes$Params } from '../fn/collaboration-controller/get-comment-likes';
import { getProductsWithPagination } from '../fn/collaboration-controller/get-products-with-pagination';
import { GetProductsWithPagination$Params } from '../fn/collaboration-controller/get-products-with-pagination';
import { getProductsWithSort } from '../fn/collaboration-controller/get-products-with-sort';
import { GetProductsWithSort$Params } from '../fn/collaboration-controller/get-products-with-sort';
import { getQrCode } from '../fn/collaboration-controller/get-qr-code';
import { GetQrCode$Params } from '../fn/collaboration-controller/get-qr-code';
import { PageCollaboration } from '../models/page-collaboration';
import { retrieveByIdCollaboration } from '../fn/collaboration-controller/retrieve-by-id-collaboration';
import { RetrieveByIdCollaboration$Params } from '../fn/collaboration-controller/retrieve-by-id-collaboration';
import { retrieveObjet1 } from '../fn/collaboration-controller/retrieve-objet-1';
import { RetrieveObjet1$Params } from '../fn/collaboration-controller/retrieve-objet-1';
import { retriveCollaboration } from '../fn/collaboration-controller/retrive-collaboration';
import { RetriveCollaboration$Params } from '../fn/collaboration-controller/retrive-collaboration';
import { updateCol } from '../fn/collaboration-controller/update-col';
import { UpdateCol$Params } from '../fn/collaboration-controller/update-col';
import { upvoteCommentary } from '../fn/collaboration-controller/upvote-commentary';
import { UpvoteCommentary$Params } from '../fn/collaboration-controller/upvote-commentary';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class CollaborationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `upvoteCommentary()` */
  static readonly UpvoteCommentaryPath = '/auth/{commentId}/upvotesssssssss';

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
  static readonly DownvoteCommentaryPath = '/auth/{commentId}/downvotessssssss';

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

  /** Path part for operation `downnumber()` */
  static readonly DownnumberPath = '/auth/{commentId}/downbssssssss';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downnumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  downnumber$Response(params: Downnumber$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return downnumber(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downnumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downnumber(params: Downnumber$Params, context?: HttpContext): Observable<{
}> {
    return this.downnumber$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateCol()` */
  static readonly UpdateColPath = '/auth/updateCollaboration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCol$Response(params: UpdateCol$Params, context?: HttpContext): Observable<StrictHttpResponse<Collaboration>> {
    return updateCol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCol(params: UpdateCol$Params, context?: HttpContext): Observable<Collaboration> {
    return this.updateCol$Response(params, context).pipe(
      map((r: StrictHttpResponse<Collaboration>): Collaboration => r.body)
    );
  }

  /** Path part for operation `addCollaborationsssssss()` */
  static readonly AddCollaborationsssssssPath = '/auth/collaborationss';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCollaborationsssssss()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaborationsssssss$Response(params: AddCollaborationsssssss$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addCollaborationsssssss(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCollaborationsssssss$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaborationsssssss(params: AddCollaborationsssssss$Params, context?: HttpContext): Observable<string> {
    return this.addCollaborationsssssss$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `addCollaboration1()` */
  static readonly AddCollaboration1Path = '/auth/addCollaboration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCollaboration1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration1$Response(params: AddCollaboration1$Params, context?: HttpContext): Observable<StrictHttpResponse<Collaboration>> {
    return addCollaboration1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCollaboration1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration1(params: AddCollaboration1$Params, context?: HttpContext): Observable<Collaboration> {
    return this.addCollaboration1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Collaboration>): Collaboration => r.body)
    );
  }

  /** Path part for operation `addCollaboration2()` */
  static readonly AddCollaboration2Path = '/auth/addColbeltaswira';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCollaboration2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration2$Response(params: AddCollaboration2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addCollaboration2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCollaboration2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCollaboration2(params: AddCollaboration2$Params, context?: HttpContext): Observable<string> {
    return this.addCollaboration2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getCommentLikes()` */
  static readonly GetCommentLikesPath = '/auth/{commentId}/likesssssssssss';

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
  static readonly GetCommentDislikesPath = '/auth/{commentId}/dislikessssssssss';

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

  /** Path part for operation `retriveCollaboration()` */
  static readonly RetriveCollaborationPath = '/auth/retriveCollaboration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retriveCollaboration()` instead.
   *
   * This method doesn't expect any request body.
   */
  retriveCollaboration$Response(params?: RetriveCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
    return retriveCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retriveCollaboration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retriveCollaboration(params?: RetriveCollaboration$Params, context?: HttpContext): Observable<Array<Collaboration>> {
    return this.retriveCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaboration>>): Array<Collaboration> => r.body)
    );
  }

  /** Path part for operation `retrieveByIdCollaboration()` */
  static readonly RetrieveByIdCollaborationPath = '/auth/retrieveByIdCollaboration/{idcol}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveByIdCollaboration()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdCollaboration$Response(params: RetrieveByIdCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<Collaboration>> {
    return retrieveByIdCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveByIdCollaboration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveByIdCollaboration(params: RetrieveByIdCollaboration$Params, context?: HttpContext): Observable<Collaboration> {
    return this.retrieveByIdCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<Collaboration>): Collaboration => r.body)
    );
  }

  /** Path part for operation `getQrCode()` */
  static readonly GetQrCodePath = '/auth/qrcode/{idcol}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getQrCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQrCode$Response(params: GetQrCode$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return getQrCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getQrCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getQrCode(params: GetQrCode$Params, context?: HttpContext): Observable<void> {
    return this.getQrCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getProductsWithPagination()` */
  static readonly GetProductsWithPaginationPath = '/auth/paginations/{offset}/{pageSize}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductsWithPagination()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsWithPagination$Response(params: GetProductsWithPagination$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
    return getProductsWithPagination(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductsWithPagination$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsWithPagination(params: GetProductsWithPagination$Params, context?: HttpContext): Observable<Array<Collaboration>> {
    return this.getProductsWithPagination$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaboration>>): Array<Collaboration> => r.body)
    );
  }

  /** Path part for operation `getAllPagination1()` */
  static readonly GetAllPagination1Path = '/auth/pagination';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPagination1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPagination1$Response(params?: GetAllPagination1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCollaboration>> {
    return getAllPagination1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPagination1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPagination1(params?: GetAllPagination1$Params, context?: HttpContext): Observable<PageCollaboration> {
    return this.getAllPagination1$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageCollaboration>): PageCollaboration => r.body)
    );
  }

  /** Path part for operation `getProductsWithSort()` */
  static readonly GetProductsWithSortPath = '/auth/momo/{field}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductsWithSort()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsWithSort$Response(params: GetProductsWithSort$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
    return getProductsWithSort(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductsWithSort$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsWithSort(params: GetProductsWithSort$Params, context?: HttpContext): Observable<Array<Collaboration>> {
    return this.getProductsWithSort$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaboration>>): Array<Collaboration> => r.body)
    );
  }

  /** Path part for operation `retrieveObjet1()` */
  static readonly RetrieveObjet1Path = '/auth/findobjetrecssssss/{objet}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `retrieveObjet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveObjet1$Response(params: RetrieveObjet1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaboration>>> {
    return retrieveObjet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `retrieveObjet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  retrieveObjet1(params: RetrieveObjet1$Params, context?: HttpContext): Observable<Array<Collaboration>> {
    return this.retrieveObjet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaboration>>): Array<Collaboration> => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/auth/findAllusers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<User>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `deleteCollaboration()` */
  static readonly DeleteCollaborationPath = '/auth/deleteCollaboration/{idcol}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCollaboration()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCollaboration$Response(params: DeleteCollaboration$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCollaboration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCollaboration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCollaboration(params: DeleteCollaboration$Params, context?: HttpContext): Observable<void> {
    return this.deleteCollaboration$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
