const INITIAL_STATE = {
  listStore: [],
};

export const StoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_STORE':
      return { ...state, listStore: action.payload };
    default:
      return state;
  }
};
