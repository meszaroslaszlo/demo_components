import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-with-model',
  templateUrl: './form-with-model.component.html',
  styleUrls: ['./form-with-model.component.scss']
})
export class FormWithModelComponent implements OnInit {

  name?: string;

  constructor() { }

  ngOnInit(): void {
  }

  renameYou() {
    this.name = 'Ez lesz az új neved';
  }

  onChange(event: any) {
    console.log(event);
  }

}
