import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { ManagerReducer } from './modules/Manager/ducks';
import 'bootstrap/dist/css/bootstrap.css';

import Route from './Route';

const store = createStore(
  combineReducers({
    ManagerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk),
);
ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
