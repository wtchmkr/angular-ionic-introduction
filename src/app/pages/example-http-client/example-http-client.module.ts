import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleHttpClientPageRoutingModule } from './example-http-client-routing.module';

import { ExampleHttpClientPage } from './example-http-client.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleHttpClientPageRoutingModule,

    // HttpClient
    HttpClientModule
  ],
  declarations: [ExampleHttpClientPage]
})
export class ExampleHttpClientPageModule {}
