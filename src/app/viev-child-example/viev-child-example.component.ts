import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viev-child-example,[app-viev-child-example]',
  templateUrl: './viev-child-example.component.html',
  styleUrls: ['./viev-child-example.component.scss',
]
})
export class VievChildExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('.titleClass')
  title?: ElementRef;

  constructor() {
    console.log('constructor', this.title?.nativeElement);
  }

  ngOnInit(): void {
    console.log('onInit', this.title?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.title?.nativeElement);
  }

  passNodeElement(titleFromFunction: any) {
    console.log('FromFunction', titleFromFunction);
  }

}
