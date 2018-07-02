import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import SpeechContainer from './containers/speech_container';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={SpeechContainer} />
    </ BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
