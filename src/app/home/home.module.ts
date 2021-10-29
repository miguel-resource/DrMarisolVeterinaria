import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BannerComponent} from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { DialogComponent } from './components/dialog/dialog.component'

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SwiperModule } from 'swiper/angular';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../environments/environment.prod';

//Importar librerías
import { MaterialModule } from '../material/material.module';
@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        DialogComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule,
        SwiperModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ]
})
export class HomeModule{

}
