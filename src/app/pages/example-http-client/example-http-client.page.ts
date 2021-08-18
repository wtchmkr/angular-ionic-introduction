import { Component, OnInit } from '@angular/core';
import {CatFactsService} from "../../_services/cat-facts/cat-facts.service";

@Component({
  selector: 'app-example-http-client',
  templateUrl: './example-http-client.page.html',
  styleUrls: ['./example-http-client.page.scss'],
})
export class ExampleHttpClientPage implements OnInit {

  catfact: any;
  postResponse: any;


  constructor(
    private catfactService: CatFactsService
  ) { }

  ngOnInit() {
  }

  getCatfact() {
    this.catfactService.get().subscribe(
      (res: Object) => {
        this.catfact = res;
      }
    )
  }

  postCatfact() {
    this.catfactService.post( { catfact: ''}).subscribe(
      (res: any) => {
        this.postResponse = res;
      }
    )
  }

}
