import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware()
export default function configureStore() {
  const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(RootSaga);
  return store
}