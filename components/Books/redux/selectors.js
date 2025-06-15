import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectBooks = () =>
  createSelector(selectGlobal, (globalState) => globalState?.books?.data);

export const selectBooksState = () =>
  createSelector(selectGlobal, (globalState) => globalState?.books);

export const selectSearchBooks = () =>
  createSelector(selectGlobal, (globalState) => globalState?.books?.seachData);

