import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleFormsPage } from './example-forms.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFormsPageRoutingModule {}
