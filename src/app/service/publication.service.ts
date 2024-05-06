import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {categories, Publication} from '../model/publication.model';
import {catchError, map} from 'rxjs/operators';
import {Commentary} from '../model/commentary.model';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  constructor(private http: HttpClient) {
  }

  public getPublications(): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>>('Http://localhost:8080/api/v1/auth/retrieveAllPofForum');
  }

  getPublicationById(idpub: number): Observable<Publication> {
    return this.http.get<Publication>(`Http://localhost:8080/api/v1/auth/retrieveByIdPub/${idpub}`);
  }


  searchBySubject(query: string): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>>('Http://localhost:8080/api/v1/auth/retrieveBySubject?subject=' + query);
  }

  searchByContent(query: string): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>>('Http://localhost:8080/api/v1/auth/retrieveByContent?content=' + query);
  }

  addPublication(publication: {
    commentaries: any[];
    subject: string;
    datePub: Date;
    categories: categories;
    nbr_com: number;
    close: string;
    content: string;
    nbr_vue: number;
    tags: string;
    username: string
  },             idUSER: number): Observable<Publication> {
    return this.http.post<Publication>(`Http://localhost:8080/api/v1/auth/${idUSER}/1/addPub`, publication);
  }
  public countCategoriesOccurences(): Observable<Map<categories, number>> {
    return this.getPublications().pipe(
      map((publications: Publication[]) => {
        const categoriesCountMap: Map<categories, number> = new Map<categories, number>();
        publications.forEach((publication: Publication) => {
          if (publication.categories) {
            const category: categories = publication.categories as categories;
            if (categoriesCountMap.has(category)) {
              // tslint:disable-next-line:no-non-null-assertion
              categoriesCountMap.set(category, categoriesCountMap.get(category)! + 1);
            } else {
              categoriesCountMap.set(category, 1);
            }
          }
        });
        return categoriesCountMap;
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deletePublication(id: number): Observable<any> {
    return this.http.delete<any>(`Http://localhost:8080/api/v1/auth/deletePub/${id}`);
  }

  updatePublication(publication: Publication): Observable<Publication> {
    return this.http.put<Publication>('Http://localhost:8080/api/v1/auth/updatePub', publication);
  }

  fetchCommentsByPublicationId(idpub: number): Observable<Array<Commentary>> {
    return this.http.get<Array<Commentary>>(`Http://localhost:8080/api/v1/auth/retrieveALLC/${idpub}`);
  }
  incrementViewsForPublication(id: number): Observable<any> {
    return this.http.put(`Http://localhost:8080/api/v1/auth/publications/${id}/increment-views`, {});
  }
  searchByTags(tag: string): Observable<Array<Publication>> {
    return this.http.get<Array<Publication>> ('Http://localhost:8080/api/v1/auth/retrieveByTagsP?tags=' + tag);
  }
  fetchPubByIdUser(idUser: number): Observable<Publication[]> {
    return this.http.get<Publication[]>(`Http://localhost:8080/api/v1/auth/retrieveByUser/${idUser}`);
  }
  uploadImage(imageFile: File, idpub: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imageFile', imageFile, imageFile.name);
    return this.http.post(`http://localhost:8080/api/v1/auth/upload/${idpub}`, formData);
  }
  }

