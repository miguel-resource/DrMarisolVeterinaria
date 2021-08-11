import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Declaramos nuestros componentes, directivas y pipes que van a quedar
//compartidas. 
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { MaterialModule } from './../material/material.module';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
