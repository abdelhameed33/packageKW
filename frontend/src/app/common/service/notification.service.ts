import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) {
  }

  sendChat(message) {
    this.socket.emit('chat', message);
  }

  receiveChat() {
    return this.socket.fromEvent('chat');
  }
}
