import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {
  constructor(private http: HttpClient) { }
  apiurl = 'http://backend-service:8087/api/v1/auth';
  readonly ENDPOINT_PAGINATION="/pagination"
  readonly ENDPOINT_GETOBJET="/findobjetrecssssss/"
  readonly ENDPOINT_GETCATEGORIE="/categorie/"

  getQRCode(idcol: number): Observable<Blob> {
    const url = `${this.apiurl}/qrcode/${idcol}`;
    return this.http.get(url, { responseType: 'blob' });
  }

  likeComment(commentId: number): Observable<number> {
    return this.http.put<number>(`http://backend-service:8087/api/v1/auth/${commentId}/upvotesssssssss`, null);
  }

  dislikeComment(commentId: number): Observable<number> {
    return this.http.put<number>(`http://backend-service:8087/api/v1/auth/${commentId}/downvotessssssss`, null);
  }

  getCommentLikes(commentId: number): Observable<number> {
    return this.http.get<number>(`http://backend-service:8087/api/v1/auth/${commentId}/likesssssssssss`);
  }

  getCommentDislikes(commentId: number): Observable<number> {
    return this.http.get<number>(`http://backend-service:8087/api/v1/auth/${commentId}/dislikessssssssss`);
  }

  getresplaces(commentId: number): Observable<number> {
    return this.http.put<number>(`http://backend-service:8087/api/v1/auth/${commentId}/downbssssssss`, null);
  }


  updatecollaboration(collaboration: any, id: number): Observable<any> {
    return this.http.put(`${this.apiurl}/updateCollaboration/${id}`, collaboration);
  }






  getRs(page: number, size: number = 3): Observable<any[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any[]>(`${this.apiurl}${this.ENDPOINT_PAGINATION}`, { params });
  }

FindObjet(objet:string)
   {
    return this.http.get(this.apiurl+this.ENDPOINT_GETOBJET+objet);
   }
   findByCategory(category: string): Observable<any> {
    return this.http.get<any>(this.apiurl + 'categorie/' + category);
  }

   getCategorieCollaboraitonEnumValues(): Observable<any> {
    return this.http.get(`${this.apiurl}/categorieCollaboraiton`);
  }

  GetAllCols(): Observable<any> {
    return this.http.get(`${this.apiurl}/retriveCollaborationres`);
  }
  GetAllColsbyid(idcol: any): Observable<any> {
    return this.http.get(`${this.apiurl}/retrieveByIdCollaboration/${idcol}`);
  }
  ajoutColls(collaboration: any): Observable<any> {
    return this.http.post(`${this.apiurl}/addCollaboration`, collaboration);
  }

  retrivecolabid(idcol: any): Observable<any> {
    return this.http.get(`${this.apiurl}/retrieveByIdCollaboration/${idcol}`);
  }

  getPartenaireList(): Observable<any> {
    return this.http.get(`${this.apiurl}/partenaires`);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.apiurl}/findAllusers`);
  }

  deleteColls(idcol: any): Observable<any> {
    return this.http.delete(`${this.apiurl}/deleteCollaboration/${idcol}`);
  }


  addColla(file: File, nomcol: string, desccol: string, datecol: Date, placecol: string, prixcol: number, partenaires_id_part: any, nbrres: number,user_id_user:any ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('nomcol', nomcol);
    formData.append('desccol', desccol);
    formData.append('datecol', (datecol instanceof Date ? datecol.toISOString() : new Date().toISOString()));
    formData.append('placecol', placecol);
    formData.append('prixcol', prixcol.toString());
    formData.append('partenaires_id_part', partenaires_id_part.toString());
    formData.append('nbrres', nbrres.toString());
    formData.append('user_id_user', user_id_user.toString());

    return this.http.post(this.apiurl + '/addColbeltaswira', formData, {
      responseType: 'text'
    }).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return of(error.error);
  }






}
