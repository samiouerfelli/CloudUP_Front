import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly API_URL = "http://localhost:8087"
  readonly ENDPOINT_RECLAMS = "/getallreclams"
  constructor(private HttpClient: HttpClient) {

   }
   getReclams ()
   {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_RECLAMS)
   }
}
