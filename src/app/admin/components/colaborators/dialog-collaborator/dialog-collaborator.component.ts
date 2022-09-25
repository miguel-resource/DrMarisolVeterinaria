import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Collaborator } from '../../../../core/models/collaborators.model'

//Service
import { CollaboratorsService } from '../../../../core/service/collaborators/collaborators.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-collaborator.component.html',
  styleUrls: ['./dialog-collaborator.component.css']
})
export class DialogCollaboratorComponent implements OnInit {

  formColab: FormGroup = new FormGroup({});
  idUpdateFirebase: string = "";
  imageFoto: string = '';

  constructor(
    private collaboratorsService: CollaboratorsService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogCollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Collaborator
  ) { }

  ngOnInit(): void {
    this.formColab = this.formBuilder.group({
      nombre: ['', Validators.required],
      ocupacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
      foto: ['', Validators.required],
    })

    this.imageFoto = this.data.foto;

    this.idUpdateFirebase = this.data.idFirebase;

    this.formColab.patchValue({
      nombre: this.data.nombre,
      ocupacion: this.data.ocupacion,
      descripcion: this.data.descripcion,
      email: this.data.email,
      tel: this.data.tel,
      foto: this.data.foto
    })

  }


  updateCollaborator() {
    this.collaboratorsService.updateCollaborator(this.idUpdateFirebase, this.formColab.value)
      .then(result => {
        this.formColab.reset();
        this.dialogRef.close();
      }).catch(error => {
        console.error(error);
      })
  }

  createCollaborator() {
    this.collaboratorsService.createCollaborator(this.formColab.value)
      .then(result => {
        this.formColab.reset();
        this.dialogRef.close();
      }).catch(error => {
        console.error(error);
      })
  }

  reloadPicture(data:any) {
    gsap.to("#reload", {
      duration: 1.2,
      rotation: 1000,
      transformOrigin: "center center",

    }).reverse(1);
    console.log(data.foto);
    this.imageFoto = data.foto;
  }

}
