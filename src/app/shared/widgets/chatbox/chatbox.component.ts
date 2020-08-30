import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-widget-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chatMsg = new FormGroup({
    msg: new FormControl(),
  });

  sendMessage() {

  }

}
