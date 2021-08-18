import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import { StoreModule } from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as exampleReducer from './pages/example-ngrx/store/example-ngrx.reducer';
import {EffectsModule} from "@ngrx/effects";
import {ExampleNgrxEffects} from "./pages/example-ngrx/store/example-ngrx.effects";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,

    // HttpClient
    HttpClientModule,

    // Imports
    HighlightModule,

    // Reactive Forms
    ReactiveFormsModule,
    FormsModule,

    StoreModule.forRoot({
      example: exampleReducer.reducer
    }, {}),
    EffectsModule.forRoot([
      ExampleNgrxEffects
    ]),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
