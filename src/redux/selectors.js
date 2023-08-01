export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const getContactsNames = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;
