import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

constructor() {
  }
  messages = [
    {
      user: 'souad hokili guedmi',
      createdAt: 1554090856000,
      msg: 'hello'
    },
    {
      user: 'souad hokili guedmi',
      createdAt: 1554090856000,
      msg: 'i need help pls '
    },
    {
      user: 'lotfi w el dhaw motfi',
      createdAt: 1554090856000,
      msg: 'ma7la soutek souad'
    },
  ];


  ngOnInit() {
  }
  
}
