import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { gsap } from 'gsap';
import { Service } from './card-service.model';



SwiperCore.use([
  Navigation,
  Pagination,
  A11y,
])

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  services: Service[] = [
    {
      name: 'consultas',
      icon: 'notes-medical',
      content: ''
    },
    {
      name: 'alimento',
      icon: 'bone',
      content: ''
    },
    {
      name: 'accesorios',
      icon: 'dog',
      content: ''
    },
    {
      name: 'vacunas',
      icon: 'dog',
      content: ''
    },
    {
      name: 'desparacitaciones',
      icon: 'pills',
      content: ''
    },
    {
      name: 'estética canina',
      icon: 'bath',
      content: ''
    },
    {
      name: 'cirugías',
      icon: 'user-md',
      content: ''
    },
    {
      name: 'limpieza dental',
      icon: 'teeth',
      content: ''
    }
  ];

  vendors: String[] = ['lenda', 'nupec', 'pedigree', 'purina','royal', 'blackwood'];

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#content-about',
      start: 'top top',
      end: '100% 100%',
      pin: true,
      scrub: true
    }
  }).to('.title-principal', {
    scale: 0.5,
    y: '30vh',
    duration: 1
  })


}
