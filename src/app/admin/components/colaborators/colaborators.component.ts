import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { CollaboratorsService } from './../../../core/service/collaborators/collaborators.service'

//>Models<
import { Collaborator } from './../../../core/models/collaborators.model'

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'

@Component({
  selector: 'app-colaborators',
  templateUrl: './colaborators.component.html',
  styleUrls: ['./colaborators.component.css']
})
export class ColaboratorsComponent implements OnInit {

  colaborators: Collaborator[] = []
  displayedColumns: string[] = ['nombre', 'ocupacion', 'descripcion', 'email','tel', 'acciones']

  constructor(
    private collaboratorsService: CollaboratorsService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.collaboratorsService.getAllCollaborators().subscribe(resp => {
      this.colaborators = resp.map((e:any) =>{
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data().nombre,
          ocupacion: e.payload.doc.data().ocupacion,
          descripcion: e.payload.doc.data().descripcion,
          email: e.payload.doc.data().email,
          tel: e.payload.doc.data().tel,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
    }, error => {
      console.error(error);
    })
  }


  delete(item:any) {
    if(confirm("Estás segur@ qué deseas eliminar a "+ item.nombre)) {
      this.collaboratorsService.deleteCollaborator(item.id);
    }
  }

  update(item:any):void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        nombre: item.nombre,
        ocupacion: item.ocupacion,
        descripcion: item.descripcion,
        email: item.email,
        tel: item.tel,
        foto: item.foto,
        idFirebase: item.idFirebase
      }
    })
  }

  openCreate() {
    const dialogRef = this.dialog.open(DialogComponent);
    console.log("abrir create")
  }



}
