import { InitialStateInterface } from "src/app/modules/shortenerTool/store/interfaces/initialState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {getShortenerUrlsSuccessAction} from "./actions/shortenerTool.actions";

const initialState: InitialStateInterface = {
  shortenedLinks: []
}

const shortenerToolReducer = createReducer(
  initialState,
  on(
    getShortenerUrlsSuccessAction,
    (state, action) => {
      return {
        ...state,
        shortenedLinks: action.urls
      }
    }
  )
)

export function reducer(state: InitialStateInterface, action: Action): InitialStateInterface {
  return  shortenerToolReducer(state, action)
}
