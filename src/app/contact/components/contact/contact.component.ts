import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailField: FormControl = new FormControl("", [Validators.required, Validators.email]);
  textAreaField: FormControl = new FormControl("", [Validators.required, Validators.maxLength(320)]);
  nameField: FormControl = new FormControl("", [Validators.required]);
  formContact: FormGroup = new FormGroup({});
  submit: boolean = false;
  isLoading: boolean = false;
  responseMessage: string = ""; // the response message to show to the user

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {

    this.formContact = this.formBuilder.group({
      nameField: this.nameField,
      emailField: this.emailField,
      textAreaField: this.textAreaField
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formContact.status == "VALID") {
      this.formContact.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("nameField", this.nameField.value);
      formData.append("email", this.emailField.value);
      formData.append("message", this.textAreaField.value);

      this.isLoading = true; // sending the post request async so it's in progress
      this.submit = false; // hide the response message on multiple submits
      this.http.post("YOUR GOOGLE WEB APP URL HERE", formData).subscribe(
        (response:any) => {
          // choose the response message
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.formContact.enable(); // re enable the form after a success
          this.submit = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.formContact.enable(); // re enable the form after a success
          this.submit = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
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
