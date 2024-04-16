import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from './reclamation';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  API_URL: string = environment.apiUrl
  readonly ENDPOINT_RECLAMS = "/getallreclams"
  readonly ENDPOINT_AJOUT = "/addreclamation"
  readonly ENDPOINT_UPDATE="/updatereclam"
  readonly ENDPOINT_DELETE="/deletereclam/"
  readonly ENDPOINT_GETOBJET="/findobjetrec/"
  readonly ENDPOINT_PAGINATION="/pagination"
  constructor(private HttpClient: HttpClient) {

   }
   getReclams ()
   {
    return this.HttpClient.get<Reclamation []>(this.API_URL+this.ENDPOINT_RECLAMS)
   }
   AddReclams (reclamation:Reclamation)
   {
    return this.HttpClient.post(this.API_URL+this.ENDPOINT_AJOUT,reclamation)
   }
   UpdateReclams(reclamation:Reclamation)
   {
    return this.HttpClient.put(this.API_URL+this.ENDPOINT_UPDATE,reclamation)
   }
   DeleteReclams(id:number)
   {
    return this.HttpClient.delete(this.API_URL+this.ENDPOINT_DELETE+id);
   }
   FindObjet(objet:string)
   {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_GETOBJET+objet);
   }
   getRs(page: number = 0, size: number = 10): Observable<Reclamation[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.HttpClient.get<Reclamation[]>(`${this.API_URL}${this.ENDPOINT_PAGINATION}`, { params });
  }

}
