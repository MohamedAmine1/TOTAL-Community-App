import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {

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
  CurrentUser = 'Hamza Hammi';
  newMsg = '';
  constructor(private content: IonContent) { }

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
