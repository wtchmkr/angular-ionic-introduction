import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleNgrxPage } from './example-ngrx.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleNgrxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleNgrxPageRoutingModule {}
