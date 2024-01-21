import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectBookDetails = () =>
  createSelector(selectGlobal, (globalState) => globalState?.bookDetails?.data);

export const selectBookState = () =>
  createSelector(selectGlobal, (globalState) => globalState?.bookDetails);

export const selectCategories = () =>
  createSelector(selectGlobal, (globalState) => globalState?.bookDetails?.categoryDetails);

export const selectIsLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState?.bookDetails?.loading);

