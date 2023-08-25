import {createFeatureSelector, createSelector} from "@ngrx/store";
import {InitialStateInterface, LinkItemInterface} from "./interfaces/initialState.interface";

export const shortenerToolSelectors = createFeatureSelector<InitialStateInterface>("shortenerTool")

export const shortenedLinksSelector = createSelector(
  shortenerToolSelectors,
  (state: InitialStateInterface): LinkItemInterface[] => state.shortenedLinks
)
