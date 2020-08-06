import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { bookReducer } from './reducers/reducer'
import { cartReducer } from './reducers/cartreducer'
import { formReducer } from './reducers/formreducer'
import { orderReducer } from './reducers/myordersreducer'
import { headerTitle } from './reducers/headerreducer'

// import { cancelReducer } from './reducers/cancelReducer'
// import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";

import { createStore, combineReducers,applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];
// const Middleware = 
// const middlewares = [sagaMiddleware];
//  sagaMiddleware.run()
const appStore = createStore(combineReducers({
  bookReducer: bookReducer,
  cartReducer: cartReducer,
  formReducer: formReducer,
  orderReducer: orderReducer,
  headerTitle:headerTitle
  // cancelReducer: cancelReducer
},applyMiddleware(sagaMiddleware)))
// sagaMiddleware.run();


ReactDOM.render(<Provider store={appStore}>
  <BrowserRouter>
    <App /></BrowserRouter></Provider>
  , document.getElementById("root"));

serviceWorker.unregister();
