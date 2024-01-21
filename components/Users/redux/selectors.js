import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectUsersState = () =>
  createSelector(selectGlobal, (globalState) => globalState.usersState);


