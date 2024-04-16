
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocketEndPoint: string = environment.urlWebSocket
  sockJsProtocols = ["xhr-streaming", "xhr-polling"];
  ws: any;
  @Output() changeList: EventEmitter<String> = new EventEmitter();

  constructor() {
    this.ws = new SockJS(this.webSocketEndPoint, null, { transports: this.sockJsProtocols });
    
  }
  async _connect() {
    const stompClient = Stomp.over(this.ws);
    const _this = this;
    stompClient.connect(
      {},
      async function () {
        stompClient.subscribe('/topic/notification', function (message) {
          console.log("Received message: " + message.body);
      });
      
 
      },
      this.errorCallBack
    );
  }



  errorCallBack(error: any) {
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
}