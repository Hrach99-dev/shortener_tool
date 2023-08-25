import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../types/action.types";
import {LinkItemInterface} from "../interfaces/initialState.interface";

export const getShortenerUrlsAction = createAction(
  ActionTypes.GET_SHORTENER_URLS,
  props<{url: string}>()
)

export const getShortenerUrlsSuccessAction = createAction(
  ActionTypes.GET_SHORTENER_URLS_SUCCESS,
  props<{urls: LinkItemInterface[]}>()
)

export const getShortenerUrlsFailureAction = createAction(
  ActionTypes.GET_SHORTENER_URLS_FAILURE
)
