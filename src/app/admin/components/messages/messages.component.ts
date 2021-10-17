import { Component, OnInit } from '@angular/core';
import { FormContactService } from './../../../core/service/form-contact/form-contact.service'
import { Message } from './../../../core/models/message.model';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  constructor(
    private  formContactService: FormContactService
  ) { }

  ngOnInit(): void {
    this.formContactService.getAllMessages().subscribe(response => {
      this.messages = response.map((e:any) => {
        return{
          nombre: e.payload.doc.data().nombre,
          estado: e.payload.doc.data().estado,
          email: e.payload.doc.data().email,
          mensaje: e.payload.doc.data().mensaje
        }
      })
    })
  }

}
