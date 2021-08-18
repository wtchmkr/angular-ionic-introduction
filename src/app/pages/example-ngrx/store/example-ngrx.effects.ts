import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {addData, dataAdded} from "./example-ngrx.actions";
import {Store} from "@ngrx/store";
import {CatFactsService} from "../../../_services/cat-facts/cat-facts.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ExampleNgrxEffects {

  dataAdded$ = createEffect(() => this.actions$.pipe(
    ofType(addData),
    switchMap(() => this.catfactService.get().pipe(
      map((catfact: any) => dataAdded({ catfact: catfact}))
    ))
  ))


  constructor(
    private actions$: Actions,
    private store: Store,
    private catfactService: CatFactsService
  ) {}
}
