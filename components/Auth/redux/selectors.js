import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectIsLoggedIn = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.isLoggedIn);

export const selectToken = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.token);

export const selectEmail = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.email);

export const selectTotalUsers = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.totalUsers);

export const selectUserDetails = () =>
  createSelector(selectGlobal, (globalState) => globalState.auth.userData);