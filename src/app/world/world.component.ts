import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  @Output() backToTheFuture = new EventEmitter<string>();

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.backToTheFuture.emit('Vissza a jövőbe az üzenetünk!');
  }

  onSendMessageWithService() {
    this.messageService.onPushMessage('World komponens message-t akarjuk kiíratni!');
  }


}
