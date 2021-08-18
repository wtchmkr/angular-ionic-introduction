import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {addData, testAction} from "./store/example-ngrx.actions";
import {Observable} from "rxjs";
import {selectFeatureCatfacts, selectFeatureData} from "./store/example-ngrx.selectors";

@Component({
  selector: 'app-example-ngrx',
  templateUrl: './example-ngrx.page.html',
  styleUrls: ['./example-ngrx.page.scss'],
})
export class ExampleNgrxPage implements OnInit {

  $data: Observable<any> = this.store.select(selectFeatureData);
  $catfacts: Observable<any[]> = this.store.select(selectFeatureCatfacts);

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  dispatchTest() {
    this.store.dispatch(testAction());
  }

  dispatchData() {
    this.store.dispatch(addData({ data: { test: 'data'}}));
  }

}
