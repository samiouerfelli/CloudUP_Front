import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../../reclamation';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  sendPrivateMsg(idUser: string, msg: string) {
    throw new Error('Method not implemented.');
  }

  API_URL: string = environment.apiUrl
  readonly ENDPOINT_RECLAMS = "/getallreclams"
  readonly ENDPOINT_AJOUT = "/addreclamation"
  readonly ENDPOINT_UPDATE="/updatereclam"
  readonly ENDPOINT_DELETE="/deletereclam/"
  readonly ENDPOINT_GETOBJET="/findobjetrec/"
  readonly ENDPOINT_PAGINATION="/pagination"
  readonly ENDPOINT_IDRECLAM="/getidreclam/"
  readonly ENDPOINT_SORT="/getreclamtraite"
  readonly ENDPOINT_SORTASC="/getreclamtraiteasc"
  readonly ENDPOINT_ARCHIVE = "/getarchivereclam"
  readonly ENDPOINT_traitereclam = "/traitereclam"
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
   getRs(page: number, size: number = 10,sortBy:string,sortOrder:string): Observable<Reclamation[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy.toString())
      .set('sortOrder', sortOrder.toString());

    return this.HttpClient.get<Reclamation[]>(`${this.API_URL}${this.ENDPOINT_PAGINATION}`, { params });
  }
  GetReclamID(id:number)
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_IDRECLAM+id)
  }
  GetSort()
  {
    return this.HttpClient.get<Reclamation[]>(this.API_URL+this.ENDPOINT_SORT)
  }
  GetArchive(page: number, size: number = 10,sortBy:string,sortOrder:string): Observable<Reclamation[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy.toString())
      .set('sortOrder', sortOrder.toString());


    return this.HttpClient.get<Reclamation[]>(`${this.API_URL}${this.ENDPOINT_ARCHIVE}`, { params });
  }
  GetSortAsc()
  {
    return this.HttpClient.get<Reclamation[]>(this.API_URL+this.ENDPOINT_SORTASC)
  }
  Traitereclam(reclamation:Reclamation)
   {
    return this.HttpClient.put(this.API_URL+this.ENDPOINT_traitereclam,reclamation)
   }
  

}
