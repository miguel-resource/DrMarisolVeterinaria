import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { gsap } from 'gsap';
import { Providers } from '../core/models/providers.model';
import { Service } from './../core/models/service.model'
import  { ServicesService } from './../core/service/services/services.service'
import { ProvidersService  } from './../core/service/providers/providers.service'

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

  window!: Window;
  servicesCards: Service[] = [];
  providers: Providers[] = [];

  constructor(
    private servicesService: ServicesService,
    private providersServicers: ProvidersService,
  ) {

  }

  ngOnInit(): void {
    this.servicesService.getAllServices().subscribe(resp => {
      this.servicesCards = resp.map((e: any) => {
        return { 
          name: e.payload.doc.data().nombre,
          icon: e.payload.doc.data().icon,
          content: e.payload.doc.data().contenido
        }
      })
    }, error => {
      console.error(error);
    });

    this.providersServicers.getAllProviders().subscribe(resp => {
      this.providers = resp.map((e: any) => {
        return {
          title: e.payload.doc.data().titulo,
          url: e.payload.doc.data().url
        }
      })
    })
    this.window.scrollTo(0, 0);

    console.log(this.servicesCards)
  }



  


  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }



}
