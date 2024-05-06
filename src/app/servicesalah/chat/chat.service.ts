import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../../reclamation';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private HttpClient:HttpClient) { }
  API_URL: string = environment.apiUrl
readonly ENDPOINT_PrivateCHat="/get-private-chat"
readonly ENDPOINT_PrivateSend="/send-private-message/"
readonly ENDPOINT_Vumsg="/vu-message/"
getprivatechat()
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_PrivateCHat)
  }
  sendprivateMsg(idUser:number,msg:any)
  {
    return this.HttpClient.post(this.API_URL+this.ENDPOINT_PrivateSend+idUser,msg)
  }

  readmsg(idprivatechat:number)
  {
    return this.HttpClient.get(this.API_URL+this.ENDPOINT_Vumsg+idprivatechat)
  }


}

