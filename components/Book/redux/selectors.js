import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectBookDetails = () =>
  createSelector(selectGlobal, (globalState) => globalState?.bookDetails?.data);

