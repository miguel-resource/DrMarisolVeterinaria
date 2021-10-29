import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/service/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  formLogin: FormGroup = new FormGroup({});
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: this.email,
      password : this.password,
    });
  }

  login() { 
    if(this.formLogin.valid) { 
      const value = this.formLogin.value;
      this.authService.loguinUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      }).
      catch(() => {
        alert("Usuario o contraseña invalidos");
      })
    }
  }

  getErrorEmail() {
    if(this.email.hasError('required')) {
      console.log("Error email")
      return 'Debe ingresar un correo'
    }

    return  this.email.hasError('email') ? 'Correo no válido':'';
  } 

}
  