import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { BehaviorSubject } from "rxjs";
@Injectable()
export class ChatService {
  
  messages: Subject<any>;
  message = new BehaviorSubject<any>('');
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
   }
  
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
    this.message.next(msg);
    
  }

  
  getMessage() : Observable<string> {
    return this.message.asObservable();
   }

}