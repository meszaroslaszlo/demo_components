import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  @Output() sendMessageToAppComponent = new EventEmitter<string>();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.sendMessageToAppComponent.emit('Szeretném ezt látni az app komopensben!!');
  }

  onMessageWithService() {
    this.messageService.onPushMessage('Third komponenstől jött egy üzenet service');
  }

}
