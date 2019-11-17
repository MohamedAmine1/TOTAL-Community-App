import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;


  messages = [
    {
      user: 'Souad Mahasen',
      createdAt: 1554090856000,
      msg: 'Bonjour'
    },
    {
      user: 'Souad Mahasen',
      createdAt: 1554090856000,
      msg: "j'ai besoin d'aide SVP"
    },
    {
      user: 'Hosni karamosli',
      createdAt: 1554090856000,
      msg: "c'est quoi le probleme souad ??!"
    },
  ];
  
  CurrentUser = 'Hamza Hammi';
  newMsg = '';
  constructor() { }

  ngOnInit() {
    
  }

  sendMessage(){
    this.messages.push({
      user: 'Hamza Hammi',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(()=>{
      this.content.scrollToBottom(200);
    });

  }

}
