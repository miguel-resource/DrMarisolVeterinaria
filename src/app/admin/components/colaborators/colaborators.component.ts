import { Component, OnInit } from '@angular/core';
//Services
import { CollaboratorsService } from './../../../core/service/collaborators/collaborators.service'

//Models
import { Collaborator } from './../../../core/models/collaborators.model'

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
    this.collaboratorsService.deleteCollaborator(item.id);
    console.log("Haz eliminado a "+ item.nombre);
  }
}
