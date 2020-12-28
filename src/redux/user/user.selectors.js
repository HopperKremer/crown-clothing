import { createSelector } from "reselect";

const selectUser = state => state.user

//select currentUser from user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)