
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  webSocketEndPoint: string = environment.urlWebSocket
  sockJsProtocols = ["xhr-streaming", "xhr-polling"];
  ws: any;
  @Output() MsgReceived: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    
    this.ws = new SockJS(this.webSocketEndPoint, null, { transports: this.sockJsProtocols });
    
  }
  async _connect() {
    const stompClient = Stomp.over(this.ws);
    const _this = this;
    stompClient.connect(
      {},
      async function () {
        const userId = JSON.parse(localStorage.getItem('user')!).idUser
        console.log(userId)
        stompClient.subscribe('/topic/'+userId+'/.chat', function (message) {
          console.log("Received message: " + message.body);
          let sound = new Howl({ src: ['/assets/sounds/notification.mp3'], volume: 3 });
          sound.play();
          _this.emitmsg()
      });
      
 
      },
      this.errorCallBack
    );
  }

  emitmsg(){
    this.MsgReceived.emit(true)

  }

  errorCallBack(error: any) {
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
}