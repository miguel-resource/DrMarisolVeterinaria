import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../core/service/posts/posts.service'
import SwiperCore, { Pagination, Navigation, A11y} from "swiper";
import { Slider, CardHome } from './home.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../dialog/dialog.component'

//Services
import { CollaboratorsService } from './../../../core/service/collaborators/collaborators.service'

//Models
import { Collaborator } from './../../../core/models/collaborators.model';


SwiperCore.use([
  Navigation,
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

  sliders: Slider[] = [
    {
      title: 'Prueba 1',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      background: 'https://firebasestorage.googleapis.com/v0/b/drmarisolveterinaria.appspot.com/o/slider%2Fbackground7.jpg?alt=media&token=38744b8f-47e4-4780-a96e-27f30dfca556',
      url: 'askdjaslkdjaskldjsa'
    },
    {
      title: 'Prueba 2',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      background: '',
      url: ''
    },
    {
      title: 'Prueba 3',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      background: '',
      url: ''
    },
  ];

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    private collaboratorsService: CollaboratorsService,
  ) { }

  ngOnInit(): void {
    this.fetchAllInfo();
    this.fetchInfo('2');

    this.collaboratorsService.getAllCollaborators().subscribe(resp => {
      this.collaborators = resp.map((e:any) => {
        return {
          nombre: e.payload.doc.data().nombre,
          ocupacion: e.payload.doc.data().ocupacion,
          descripcion: e.payload.doc.data().descripcion,
          email: e.payload.doc.data().email,
          tel: e.payload.doc.data().tel,
          foto: e.payload.doc.data().foto,
        }
      })
    }, err => {
      console.error(err);
    });

    console.log("Colaboradores" + this.collaborators);
  }

  cards: CardHome[] = [
    {
      title: 'cotización',
      content: "Cotiza con nosotros algunos de nuestros servicios o productos a través de nuestro formulario en la sección de ",
      highlith: 'contacto',
      url: '/contact',
      icon: 'fab fa-wpforms'
    },
    {
      title: 'blog',
      content: 'Checa nuestros tips y recomendaciones para el cuidado y mantenimiento de tus pequeños amigos en nuestra sección de ',
      highlith: 'blog',
      url: '/blog',
      icon: 'fas fa-blog'
    },
    {
      title: 'servicios',
      content: 'Puedes ver nuestras principales servicios que ofrecemos, además de nuestros principales proveedores en nuestra sección de ',
      highlith: 'nosotros',
      url: '/about',
      icon: 'fas fa-concierge-bell'
    }
  ];

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
    this.postsService.getAllInfo()
      .subscribe(posts => {
        console.log(posts);
      });
  }

  fetchInfo(id:string){
    this.postsService.getInfo(id)
      .subscribe(post => {
        console.log(post);
      })
  }

  postInfo(){
    const newInfo = {
      id: '22',
      title: 'Hii',
      image: 'xd',
      price: 200,
      description: 'blaa bla bla'
    };
    this.postsService.postInfo(newInfo)
    .subscribe(post =>{
      console.log(post);
    })
  }

  updateInfo(){
    const newInfo = {
      id: '27',
      title: 'Hola acabas de ser editado',
      image: 'porque la verdad si me da hueva',
      price: 200,
      description: 'blaa bla bla'
    };
    this.postsService.putInfo('2',newInfo)
    .subscribe(post =>{
      console.log(post);
    })
  }

  deleteInfo(){
    this.postsService.deleteInfo('2')
    .subscribe(post =>{
      console.log(post);
    })
  }

}


