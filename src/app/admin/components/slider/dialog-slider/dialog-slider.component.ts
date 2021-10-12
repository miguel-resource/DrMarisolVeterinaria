import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//Models
import { Slider } from '../../../../core/models/slider.model'

//Services
import { SliderService } from 'src/app/core/service/slider/slider.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-slider.component.html',
  styleUrls: ['./dialog-slider.component.css']
})
export class DialogSliderComponent implements OnInit {

  formSlider: FormGroup = new FormGroup({});
  idUpdateFirebase: string = "";
  imageFondo:string = "";

  constructor(
    private sliderService: SliderService,
    public formBuilter: FormBuilder,
    public dialogRef: MatDialogRef<DialogSliderComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Slider
  ) { }

  ngOnInit(): void {
    this.formSlider = this.formBuilter.group({
      titulo: ['', Validators.required],
      contenido: ['', Validators.required],
      background: ['', Validators.required],
      url: ['']
    });

    this.imageFondo = this.data.background;

    console.log(this.data);
    this.idUpdateFirebase = this.data.idFirebase;

    this.formSlider.patchValue({
      titulo: this.data.titulo,
      contenido: this.data.contenido,
      background: this.data.background,
      url: this.data.url
    })
  }

  updateSlider() {
    this.sliderService.updateSlider(this.idUpdateFirebase, this.formSlider.value)
    .then(result => {
      this.formSlider.reset();
      this.dialogRef.close();
    }).catch(error => {
      console.error(error);
    })
  }

  createSlider() {
    this.sliderService.createSlider(this.formSlider.value)
    .then(result => {
      this.formSlider.reset();
      this.dialogRef.close();
    }).catch(error => {
      console.error(error);
    })
  }

}
