import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private sendMessage = new BehaviorSubject<string>('Init');

  constructor() { }

  onPushMessage(message: string) {
    this.sendMessage.next(message)
  }

  getMessage() : Observable<string> {
    return this.sendMessage;
  }

}
