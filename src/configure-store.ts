import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RootAppState, createRootReducer } from 'store';

const configureStore = (startingState: RootAppState): Store<RootAppState> => {
  // create the composing function for middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(),
    startingState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  // sagaMiddleware.run(rootSaga)

  return store;
};

export default configureStore;
