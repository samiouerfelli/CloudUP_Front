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
}
