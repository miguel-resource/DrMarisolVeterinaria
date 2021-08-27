import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './components/about.component';

import { AboutRoutingModule } from './about-routing.module';
import { MaterialModule } from '../material/material.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        AboutRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SwiperModule
    ]
})
export class AboutModule{}
