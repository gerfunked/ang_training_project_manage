import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-subscribe',
  templateUrl: './email-subscribe.component.html',
  styleUrls: ['./email-subscribe.component.css'],
})
export class EmailSubscribeComponent implements OnInit {
  @Output()
  subscribe = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(myInput: HTMLInputElement) {
    console.log(`Your press resulted in: ${myInput.value}`);
    this.subscribe.emit(myInput.value);
    console.log(`Emmitted: ${myInput.value}`);
  }
}

class EmailInfo {
  email: string = '';
  dt: number = Date.now();

  constructor(email_addr: string) {
    this.email = email_addr;
  }
}
