import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectIsLoggedIn = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.isLoggedIn);

