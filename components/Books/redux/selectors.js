import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectBooks = () =>
  createSelector(selectGlobal, (globalState) => globalState?.books?.data);

