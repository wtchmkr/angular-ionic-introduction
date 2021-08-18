import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleComponentsPageRoutingModule } from './example-components-routing.module';

import { ExampleComponentsPage } from './example-components.page';
import {HighlightModule} from "ngx-highlightjs";
import {TestComponentComponent} from "../../_components/shared/test-component/test-component.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExampleComponentsPageRoutingModule,
        HighlightModule
    ],
  declarations: [ExampleComponentsPage, TestComponentComponent]
})
export class ExampleComponentsPageModule {}
