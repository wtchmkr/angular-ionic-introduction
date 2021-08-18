import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleHttpClientPage } from './example-http-client.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleHttpClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleHttpClientPageRoutingModule {}
