import {createStore,applyMiddleware,compose} from 'redux';
//import all your middleware here
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
export let defaultMiddlewares = [applyMiddleware(thunk)];
if(true){
  defaultMiddlewares = defaultMiddlewares.concat([
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ])
}


export function createStoreWithMiddleware(middlewares = []){
  return function(...args){
    return compose(
      ...middlewares,
      ...defaultMiddlewares,
    )(createStore)(...args);
  }
}