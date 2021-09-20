import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  @Input()
  public name = '1';

  @Output() backToTheFuture2 = new EventEmitter<string>();

  @Output() sendMessageFromThirdComponent = new EventEmitter<string>();

  public defaultName = 'Default';

  private namePrivate = 'John Private';

  constructor() { }

  ngOnInit(): void {
  }

  public rename() {
    this.name = this.namePrivate;
  }

  public sendMessageToParent() {
    this.backToTheFuture2.emit('Ez a helló komponens üzenete a szülő felé');
  }

  public sendMessageToParentFromThirdComponent(message: string) {
    this.sendMessageFromThirdComponent.emit(message);
  }


}
