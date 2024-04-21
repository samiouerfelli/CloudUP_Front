import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../reclamation.service';
import { WebSocketService } from '../all-modules/web-socket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  idUser: string="UNKNOWN";
  privateChat:any=null
  allprivateChat :any =[]
  msg: string="";
  chatOpenIndex:number=0
  constructor(private chatService:ReclamationService,private socket:WebSocketService){

  }
  ngOnInit(): void {
   this.getUserId()
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
  getUserId() {
    this.idUser=localStorage.getItem('userId')!
  }
  getprivate() {
    if(this.idUser=="admin"){
      this.chatService.getAdminprivatechat().subscribe((result:any)=>{
        if(result!=null){

          this.allprivateChat=result
          this.privateChat=result[this.chatOpenIndex]
          
        }
       })
    }else{
      this.chatService.getprivatechat(this.idUser).subscribe(result=>{
        if(result!=null){
        this.privateChat=result
        this.allprivateChat=[result]
     } })
    
  }
setTimeout(() => {
  console.log(this.privateChat)
}, 100);
}

  sendPrivateMsg(){
    if(this.msg!=""){
      if(this.idUser=="admin"){
        this.chatService.sendAdminprivateMsg(this.privateChat.creator,{message:this.msg}).subscribe(
          result=>{
            this.msg=""
            this.getprivate()
          }
         ) 
      }
      else{
        this.chatService.sendprivateMsg(this.idUser,{message:this.msg}).subscribe(
          result=>{
            console.log(result)
            this.msg=""
            this.getprivate()
          }
         )
      }

    }else{
      console.log("Empty msg ......!!!")
    }
  }

  getmsg(index:number)
  {
    this.chatOpenIndex=index
    this.privateChat=this.allprivateChat[index]
  }
}
