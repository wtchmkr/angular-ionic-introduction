import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  mockServerUrl = 'https://37011e96-8940-4e9a-90fc-1f01cb26be04.mock.pstmn.io'
  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get('https://catfact.ninja/fact')
  }

  post(data: any) {
    return this.http.post(this.mockServerUrl, data);
  }
}
