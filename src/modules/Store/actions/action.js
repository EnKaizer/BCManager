import DataFake from '../fake';

export const actionStore = () => {
  return dispatch => {
    dispatch({ type: 'LIST_STORE', payload: DataFake });
  };
};
