import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from './reclamation';
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
   getRs(page: number, size: number = 10): Observable<Reclamation[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.HttpClient.get<Reclamation[]>(`${this.API_URL}${this.ENDPOINT_PAGINATION}`, { params });
  }
  GetReclamID(id:number)
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_IDRECLAM+id)
  }
////////////////////////////// to chat !service
readonly ENDPOINT_PrivateCHat="/get-private-chat/"
readonly ENDPOINT_PrivateSend="/send-private-message/"
readonly ENDPOINT_AdminPrivateCHat="/getadmin-private-chat"
readonly ENDPOINT_AdminPrivateSend="/send-admin-private-message/"
getprivatechat(idUser:string)
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_PrivateCHat+idUser)
  }
  sendprivateMsg(idUser:string,msg:any)
  {
    return this.HttpClient.post(this.API_URL+this.ENDPOINT_PrivateSend+idUser,msg)
  }

  getAdminprivatechat()
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_AdminPrivateCHat)
  }
  sendAdminprivateMsg(idUser:string,msg:any)
  {
    return this.HttpClient.post(this.API_URL+this.ENDPOINT_AdminPrivateSend+idUser,msg)
  }

}