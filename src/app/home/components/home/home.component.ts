import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../core/service/posts/posts.service'
import SwiperCore, { Parallax, Pagination, Navigation, Thumbs } from "swiper";
import { Slider, CardHome } from './home.model';


SwiperCore.use([
  Navigation,
  Pagination,
  Thumbs
])

@Component({
  selector: 'app-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];

  sliders: Slider[] = [
    {
      title: 'Prueba 1',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      backgroud: '',
      url: 'askdjaslkdjaskldjsa'
    },
    {
      title: 'Prueba 2',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      backgroud: '',
      url: ''
    },
    {
      title: 'Prueba 3',
      content: 'Somos una empresa dedicada a la salud de tus mascotas',
      backgroud: '',
      url: ''
    },
  ];

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

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.fetchAllInfo();
    this.fetchInfo('2');
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
