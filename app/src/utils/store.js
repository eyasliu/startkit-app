import {Component} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
//import all your middleware here
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
export let defaultMiddlewares = [applyMiddleware(thunk)];

if ( config.debug && config.devtool ) {
  defaultMiddlewares = defaultMiddlewares.concat([
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ]);
}

export default function createStoreWithMiddleware(middlewares = []) {
  return (...args) => {
    return compose(
      ...middlewares,
      ...defaultMiddlewares,
    )(createStore)(...args);
  };
}
