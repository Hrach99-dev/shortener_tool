import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {ShortenerToolService} from "../../services/shortenerTool.service";
import {getShortenerUrlsAction, getShortenerUrlsFailureAction, getShortenerUrlsSuccessAction} from "../actions/shortenerTool.actions";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {LinkItemInterface, ShortenerToolResponseInterface} from "../interfaces/initialState.interface";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ShortenerToolEffects {

  constructor(
    private readonly _store: Store,
    private readonly _actions$: Actions,
    private readonly _shortenerToolService: ShortenerToolService,
    private readonly _toastrService: ToastrService,
  ) {
  }

  getShortenerUrls$ = createEffect(() => this._actions$.pipe(
    ofType(getShortenerUrlsAction),
    switchMap(({url}) => this._shortenerToolService.getUrls(url).pipe(
      map((response: ShortenerToolResponseInterface) => {
        const {result} = response
        const links: LinkItemInterface[] = [
          {
            key: result.short_link,
            value: result.full_short_link
          },
          {
            key: result.short_link2,
            value: result.full_short_link2
          },
        ]
        return getShortenerUrlsSuccessAction({urls: links});
      }),
      catchError((httpError: HttpErrorResponse) => {
        this._toastrService.error(httpError.error.error_code, httpError.error.error)
        return of(getShortenerUrlsFailureAction())
      })
    ))
  ))
}
