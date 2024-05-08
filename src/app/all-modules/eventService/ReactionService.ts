import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  HttpHeaders } from '@angular/common/http';
import {Event} from 'src/app/all-modules/eventService/event'
import { catchError, map } from 'rxjs/operators'; // Import map operator if needed

const AUTH_API = 'http://localhost:8087/api/v1/auth/evenement/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReactionService{
  apiurl = 'http://localhost:8087/api/v1/auth/reaction';
  token: any = JSON.parse(localStorage.getItem('user') || '""');
  headers: HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  constructor(private http: HttpClient) { }

    reactToPost(postId: number,reactionType: string,userId:number): Observable<any> {
        return this.http.post<any>(`${this.apiurl}/add-reaction/${postId}/${userId}`, { reactionType });
    }

    getReaction(postId: number,userId:number): Observable<any> {
        return this.http.get<any>(`${this.apiurl}/get-reaction/${postId}/${userId}`);
    }
    removeReaction(reactionId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiurl}/remove-reaction/${reactionId}`);
    }

    changeReaction(reaction: any): Observable<any> {
        return this.http.put<any>(`${this.apiurl}/modify-reaction`, reaction,{ headers: this.headers });
    }

    countReaction(postId: number):Observable<any>{
        return this.http.get<any>(`${this.apiurl}/count-reaction/${postId}`);
    }
    getReactionCount(postId: number):Observable<any>{
      return this.http.get<any>(`${this.apiurl}/count-reaction/${postId}`);
  }


}



