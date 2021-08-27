import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';


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

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

 
}
