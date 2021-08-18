import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleNgrxPageRoutingModule } from './example-ngrx-routing.module';

import { ExampleNgrxPage } from './example-ngrx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleNgrxPageRoutingModule
  ],
  declarations: [ExampleNgrxPage]
})
export class ExampleNgrxPageModule {}
