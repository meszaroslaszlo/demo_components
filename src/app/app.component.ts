import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'twoComponent';
  messaseFromThirdComponent = 'Ez az eredeti üzenet!';

  refactorNameParameter = '123';
  refactorList: Array<string> = [];
  messaseFromThirdComponentWithService = '123456789';

  subscriptions: {
    [s: string]: Subscription;
  } = {};

  constructor(private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.subscriptions['getMessage']?.unsubscribe();
    this.subscriptions['getMessage'] = (this.messageService.getMessage().subscribe((messageFromService) =>
      this.messaseFromThirdComponentWithService = messageFromService));
  }

  ngOnDestroy(): void {
    for (const key of Object.keys(this.subscriptions)) {
      this.subscriptions[key].unsubscribe();
    }
  }

  renameNameInHello() {
    this.refactorNameParameter = 'Jó napot';
  }

  onParentReadMessageFromWorld(message: string) {
    this.refactorNameParameter = `Jó napot, ${message}`;
  }

  onParentReadMessageFromHello(message: string) {
    this.title = message;
    this.subscriptions['getMessage']?.unsubscribe();
    this.subscriptions['getMessage'] = (this.messageService.getMessage().subscribe((messageFromService) =>
      this.messaseFromThirdComponentWithService = messageFromService));
  }

  onParentReadMessageFromThirdComponent(message: string) {
    this.messaseFromThirdComponent = message;
  }

}
