import { createSelector } from "reselect";

const selectGlobal = (state) => state;

export const selectIssueBooks = () =>
  createSelector(selectGlobal, (globalState) => globalState.issueBooks);


