import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes de material a importar
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
