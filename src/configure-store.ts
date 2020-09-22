import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import { IApplicationState, createRootReducer, rootSaga } from 'store';

const configureStore = (
  history: History,
  startingState: IApplicationState,
): Store<IApplicationState> => {
  // create the composing function for middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    startingState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
