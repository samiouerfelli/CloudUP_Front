import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from './reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly API_URL = "http://localhost:8087/api"
  readonly ENDPOINT_RECLAMS = "/getallreclams"
  readonly ENDPOINT_AJOUT = "/addreclamation"
  readonly ENDPOINT_UPDATE="/updatereclam"
  readonly ENDPOINT_DELETE="/deletereclam/"
  readonly ENDPOINT_GETID="/getidreclam/"
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
   FindID(id:number)
   {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_GETID+id);
   }

}
