import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSliderComponent } from './dialog-slider/dialog-slider.component'

//Service
import { SliderService } from './../../../core/service/slider/slider.service'
//Model
import { Slider } from './../../../core/models/slider.model'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders: Slider[] = [];
  displayedColumns: string[] = ['title', 'content', 'background', 'url', 'acciones'];


  constructor(
    private sliderService: SliderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sliderService.getAllSliders().subscribe(sliders => {
      this.sliders = sliders.map((e:any) => {
        return {
          id: e.payload.doc.id,
          titulo: e.payload.doc.data().titulo,
          contenido: e.payload.doc.data().contenido,
          background: e.payload.doc.data().background,
          url: e.payload.doc.data().url,
          idFirebase: e.payload.doc.id
        }
      })
    }, err => console.error(err))
  }

  update(item:any):void {
    let dialogRef = this.dialog.open(DialogSliderComponent, {
      width: '800px',
      data: {
        titulo: item.titulo,
        contenido: item.contenido,
        background: item.background,
        url: item.url,
        idFirebase: item.idFirebase,
      }
    })
  }


  delete(item:any) {
    if(confirm("¿Estás segur@ qué deseas eliminar a "+ item.nombre+"?")) {
      this.sliderService.deleteSlider(item.id);
    }
  }

  openCreate():void {
    const dialogRef = this.dialog.open(DialogSliderComponent, {
      width: '800px'
    });
  }

}
