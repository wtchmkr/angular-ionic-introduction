import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Componentes', url: '/example-components', icon: 'mail' },
    { title: 'Forms', url: '/example-forms', icon: 'mail' },
    { title: 'HttpClient', url: '/example-http-client', icon: 'mail' },
    { title: 'NgRx', url: '/example-ngrx', icon: 'mail' },
  ];

  constructor() {}
}
