import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';

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
        ReactiveFormsModule
    ]
})
export class ContactModule{}
