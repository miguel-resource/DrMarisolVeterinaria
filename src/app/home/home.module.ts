import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BannerComponent} from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SwiperModule } from 'swiper/angular';


//Importar librerías
import { MaterialModule } from '../material/material.module';
@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule,
        SwiperModule
    ]
})
export class HomeModule{

}
