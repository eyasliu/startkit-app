import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import Devtools from './DevTools';


export let defaultMiddlewares = [applyMiddleware(thunk)];

if (config.debug && config.devtool) {
  defaultMiddlewares = defaultMiddlewares.concat([
    Devtools.instrument(),
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
