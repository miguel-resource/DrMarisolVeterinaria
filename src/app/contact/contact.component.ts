import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormContactService } from './../core/service/form-contact/form-contact.service'
@Component({
  selector: 'app-contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailField: FormControl = new FormControl("", [Validators.required, Validators.email]);
  textAreaField: FormControl = new FormControl("", [Validators.required, Validators.maxLength(150)]);
  nameField: FormControl = new FormControl("", [Validators.required]);
  selectField: FormControl = new FormControl("", [Validators.required]);
  formContact: FormGroup = new FormGroup({});
  submit: boolean = false;
  isLoading: boolean = false;
  responseMessage: string = ""; // the response message to show to the user
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private formContactService: FormContactService,
  ) {

    this.formContact = this.formBuilder.group({
      nombre: this.nameField,
      email: this.emailField,
      mensaje: this.textAreaField,
      estado: this.selectField
    })

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

  getSelectMessage() {
    if((this.selectField.hasError('required'))) {
      return 'Debes ingresar una opción'
    }

    return this.selectField.hasError('select') ? 'Selección invalida' : "";
  }

  createMessage() {
    console.log(this.formContact.value);
    this.formContactService.createMessage(this.formContact.value).then(() => {
      this.formContact.reset();
      alert("Mensaje enviado con éxito");
    }).catch(() => {
      alert("No se pudo envíar su mensaje")
    })
  }

}
