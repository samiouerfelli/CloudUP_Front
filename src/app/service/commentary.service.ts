import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentary } from '../model/commentary.model';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  constructor(private http: HttpClient) {}

  addComment(idu: number, idpub: number, newComment: {
    content: string;
    tags: string;
    // @ts-ignore
    datePublication: Date,
    solution: string;
    voteNegatif: number;
    votePositif: number;
    username: string;
    idpub: number;
  }): Observable<number> {
    return this.http.post<number>(`http://backend-service:8087/api/v1/auth/addCom/${idu}/${idpub}`, newComment);
  }
  searchByContent(idpub: number , content: string): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`http://backend-service:8087/api/v1/auth/retrieveByContentC/${idpub}?content=` + content);
  }

  searchByTags(idpub: number, tags: string): Observable<Commentary[]> {
    return this.http.get<Commentary[]>(`http://backend-service:8087/api/v1/auth/retrieveByTagsC/${idpub}?tags=` + tags);
  }

  likeComment(commentId: number): Observable<number> {
    return this.http.put<number>(`http://backend-service:8087/api/v1/auth/${commentId}/upvote`, null);
  }

  dislikeComment(commentId: number): Observable<number> {
    return this.http.put<number>(`http://backend-service:8087/api/v1/auth/${commentId}/downvote`, null);
  }

  getCommentLikes(commentId: number): Observable<number> {
    return this.http.get<number>(`http://backend-service:8087/api/v1/auth/${commentId}/likes`);
  }

  getCommentDislikes(commentId: number): Observable<number> {
    return this.http.get<number>(`http://backend-service:8087/api/v1/auth/${commentId}/dislikes`);
  }

  updateComment(comment: Commentary): Observable<Commentary> {
    return this.http.put<Commentary>(`http://backend-service:8087/api/v1/auth/updateC`, comment);
  }



  deleteComment(commentId: number, publicationId: number): Observable<void> {
    return this.http.delete<void>(`http://backend-service:8087/api/v1/auth/deleteC/${commentId}/${publicationId}`);
  }
  checkAndMarkSolution(): Observable<boolean> {
    return this.http.put<boolean>('http://backend-service:8087/api/v1/auth/mark-solution-and-close', {});
  }
  getCommentsName(userId: number): Observable<string> {
    // @ts-ignore
    return this.http.get<string>(`http://backend-service:8087/api/v1/auth/comments?userId=${userId}`, { responseType: 'text' });
  }




}
