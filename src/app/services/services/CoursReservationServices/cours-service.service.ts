import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
// @ts-ignore
import {Cours} from '../../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursServiceService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) {
  }

  public getCours(): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>(`${this.baseUrl}/retrieveAllCours`);
  }

  // tslint:disable-next-line:typedef
  public deleteCourse(cr: Cours){
    return this.http.delete(`${this.baseUrl}/deleteCours/${cr.idCours}`);
  }

  saveCourse(course: Cours): Observable<Cours> {
    return this.http.post<Cours>(`${this.baseUrl}/addCours`, course);

  }
  public searchCourse(keyword: string): Observable<Array<Cours>> {
    return this.http.get<Array<Cours>>(`${this.baseUrl}/retreiveByName/${keyword}`);
  }
  public getCoursByID(coursId: number): Observable<Cours>{
    return this.http.get<Cours>(`${this.baseUrl}/retrieveByIdCours/${coursId}`) ;

  }

  updateCours(cours: Cours): Observable<Cours> {

    return this.http.put<Cours>(`${this.baseUrl}/updateCours`, cours) ;


  }
}
