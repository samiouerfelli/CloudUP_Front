import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../servicesalah/reclamation/reclamation.service';
import { WebSocketService } from '../all-modules/web-socket-service.service';
import { ChatService } from '../servicesalah/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  privateChat:any=null
  allprivateChat :any =[]
  msg: string="";
  chatOpenIndex:number=0
   userId = JSON.parse(localStorage.getItem('user')!).idUser
   userrole = JSON.parse(localStorage.getItem('user')!).authorities[0].authority

  constructor(private chatService:ChatService,private socket:WebSocketService){
console.log(this.userrole)
  }
  ngOnInit(): void {
   this.getprivate()

   this.getmsgSubscription()
  }
  getmsgSubscription() {
   this.socket.MsgReceived.subscribe(
    ()=>{
     this.getprivate()
    }
   )
  }

  getprivate() {

      this.chatService.getprivatechat().subscribe((result:any)=>{
        if(result!=null){
        this.privateChat=result[this.chatOpenIndex]
        this.allprivateChat=result
     } })

setTimeout(() => {
  console.log(this.privateChat)
}, 100);
}

  sendPrivateMsg( idUser :number){
    if (idUser==null) idUser=-1
    if(this.msg!=""){

        this.chatService.sendprivateMsg(idUser,{message:this.msg}).subscribe(
          result=>{
            console.log(result)
            this.msg=""
            this.getprivate()
          }
         )

    }else{
      console.log("Empty msg ......!!!")
    }
  }

  getmsg(index:number)
  {
    this.chatOpenIndex=index
    this.privateChat=this.allprivateChat[index]
   this.readmsg()
  }

  unreadMessageCount (privatechat:any):number{
  return  privatechat.messages.filter((msg:any) => !msg.vu && msg.senderId!=this.userId).length;
  }


 readmsg(){
  console.log("aa")
  this.chatService.readmsg(this.privateChat.id).subscribe(
    ()=>this.getprivate()
  )
 }

}
