import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleFormsPageRoutingModule } from './example-forms-routing.module';

import { ExampleFormsPage } from './example-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleFormsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExampleFormsPage]
})
export class ExampleFormsPageModule {}
