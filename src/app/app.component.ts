 import { AfterViewInit, Component,OnInit, ViewChild,ElementRef  } from '@angular/core';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService,WebsocketService]
})
export class AppComponent implements OnInit{
  @ViewChild('videoElement') videoElement: ElementRef;  
 
  title = 'app';
  xxx: string = ''
   message: Observable<string>; 
   videostream: any;
   
  constructor(private chat: ChatService, private ws: WebsocketService){

    this.message = this.ws.getMessage()
 /*    this.videostream = this.ws.getVideo() */
   }

  ngOnInit() {
/*     this.video() */
  /*   const video =  this.videoElement.nativeElement */
    this.chat.messages.subscribe(msg => {
   
/* 
      video.srcObject =  msg */
 /* 
      console.log( msg); */
    })
    
   
 
  }

  sendMessage() {
    this.chat.sendMsg(this.xxx);
  }

  
  video() {
    console.log('第一次取得視訊stream')
    var constraints = {
      audio: true,
      video: {
        facingMode: 'user'
      }
    }

    const self =this
    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
      self.ws['stream']= stream

      
    })
  }
  

}