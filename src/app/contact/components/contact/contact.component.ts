import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailField: FormControl;
  textAreaField: FormControl;
  nameField: FormControl;

  constructor() {

    this.emailField = new FormControl('', [
      Validators.required,
       Validators.email
    ]);

    this.textAreaField = new FormControl('', [
      Validators.required
    ]);

    this.nameField = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void {
  }


  getEmailErrorMessage() {
    if ((this.emailField.hasError('required'))) {
      return 'Debes ingresar un correo';
    }

    return this.emailField.hasError('email')  ? 'Email inválido' : '';
  }

  getNameErrorMessage() {
    if ((this.nameField.hasError('required'))) {
      return 'Debes ingresar un nombre';
    }

    return this.nameField.hasError('name')  ? 'Nombre inválido' : '';
  }

  getTextsErrorMessage(){
    if ((this.textAreaField.hasError('required'))) {
      return 'Debes ingresar un mesaje';
    }

    return this.nameField.hasError('textArea')  ? 'Mensaje inválido' : '';
  }
}
