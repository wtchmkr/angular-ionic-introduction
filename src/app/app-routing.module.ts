import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'example-components',
    loadChildren: () => import('./pages/example-components/example-components.module').then( m => m.ExampleComponentsPageModule)
  },
  {
    path: 'example-forms',
    loadChildren: () => import('./pages/example-forms/example-forms.module').then( m => m.ExampleFormsPageModule)
  },
  {
    path: 'example-http-client',
    loadChildren: () => import('./pages/example-http-client/example-http-client.module').then( m => m.ExampleHttpClientPageModule)
  },
  {
    path: 'example-ngrx',
    loadChildren: () => import('./pages/example-ngrx/example-ngrx.module').then( m => m.ExampleNgrxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
