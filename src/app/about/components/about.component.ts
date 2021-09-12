import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { gsap } from 'gsap';
import { Service, Vendors } from './about.model';



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


  //vendors: String[] = ['lenda', 'nupec', 'pedigree', 'purina','royal', 'blackwood'];
  vendors: Vendors[] = [
    {
      title: 'lenda',
      url: 'logo-lenda.png?alt=media&token=3c9cbd21-3db2-460a-8b16-5aeac37044e7'
    },
    {
      title: 'nupec',
      url: 'logo-nupec.png?alt=media&token=b8f71d79-1b2c-4dc1-8316-a4d94ff2553a'
    },
    {
      title: 'pedigree',
      url: 'logo-pedigree.png?alt=media&token=eaf086b1-b74b-4d7f-9320-0d4afd99f6bf'
    },
    {
      title: 'purina',
      url: 'logo-purina.png?alt=media&token=c0040fa4-33c0-4d4b-98b1-135c9db66d51'
    },
    {
      title: 'royal',
      url: 'logo-royal.png?alt=media&token=b4365498-34a4-4846-871f-b01b653ac52a'
    },
    {
      title: 'blackwood',
      url: 'logo-blackwood.png?alt=media&token=7cfac187-1dde-44e9-aef9-8f0a3b29e1b6'
    },
  ];

  constructor() {

  }

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
