import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../core/service/posts/posts.service'
import SwiperCore, { Autoplay, Pagination, Navigation, A11y} from "swiper";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component'

//Services
import { CollaboratorsService } from './../../../core/service/collaborators/collaborators.service'
import { CardhomeService } from './../../../core/service/cardhome/cardhome.service';
import { SliderService } from './../../../core/service/slider/slider.service';

//Models
import { Collaborator } from './../../../core/models/collaborators.model';
import { Slider } from './../../../core/models/slider.model'
import { CardHome } from './../../../core/models/cardhome.model'

SwiperCore.use([
  Autoplay,
  Pagination,
  A11y
])

@Component({
  selector: 'app-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  //CRUDS TO DATA BASE
  collaborators: Collaborator[] = [];
  cards: CardHome[] = [];
  sliders: Slider[] = [];
  window!: Window;

  constructor(
   private postsService: PostsService,
    public dialog: MatDialog,
    private collaboratorsService: CollaboratorsService,
    private cardhomeService: CardhomeService,
    private sliderService: SliderService
  ) {}

  ngOnInit(): void {

    //Firebase get Slider
    this.sliderService.getAllSliders().subscribe(resp =>{
      this.sliders = resp.map((e:any) => {
        return {
            titulo: e.payload.doc.data().titulo,
            contenido: e.payload.doc.data().contenido,
            background: e.payload.doc.data().background,
            url: e.payload.doc.data().url,
            idFirebase: e.payload.doc.id
        }
      })
    });
    //Firebase get Colaborators
    this.collaboratorsService.getAllCollaborators().subscribe(resp => {
      this.collaborators = resp.map((e:any) => {
        return {
          nombre: e.payload.doc.data().nombre,
          ocupacion: e.payload.doc.data().ocupacion,
          descripcion: e.payload.doc.data().descripcion,
          email: e.payload.doc.data().email,
          tel: e.payload.doc.data().tel,
          foto: e.payload.doc.data().foto,
          idFirebase: e.payload.doc.id
        }
      })
    }, err => {
      console.error(err);
    });
    //Firebase get CardsHome
    this.cardhomeService.getAllCards().subscribe(resp => {
      this.cards = resp.map((e:any) => {
        return {
          title: e.payload.doc.data().titulo,
          content: e.payload.doc.data().contenido,
          highligth: e.payload.doc.data().highlight,
          url: e.payload.doc.data().url,
          icon: e.payload.doc.data().icon
        }
      })
    }, err => {
      console.error(err);
    });
    this.window.scrollTo(-10,0);

  }

  openDialog(item:any):void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        nombre: item.nombre,
        ocupacion: item.ocupacion,
        descripcion: item.descripcion,
        email: item.email,
        tel: item.tel,
      }
    })
    //this.dialog.open(DialogCoworkComponent);
  }

  fetchAllInfo(){
    
  }

  fetchInfo(id:string){
  }

  postInfo(){
    
  }

  updateInfo(){
   
  }

}


