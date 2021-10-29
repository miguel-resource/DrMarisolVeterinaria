import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact.component';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { ShowdownModule } from 'ngx-showdown';

import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        ContactRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        ShowdownModule
    ]
})
export class ContactModule{}
