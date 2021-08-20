import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [Validators.required, Validators.email]);
    this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit(): void {
  }


  getErrorMessage() {
    if (this.emailField.hasError('required')) {
      return 'Debes ingresar el correoz';
    }
    return this.emailField.hasError('email') ? 'Email inválido' : '';
  }

}
