import { StrictMode } from 'react';
import { render } from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {fetchQuestsAction} from './store/api-actions'
import { createApi } from './services/api';
import App from 'components/app/app';

const api = createApi()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
));

store.dispatch(fetchQuestsAction())

render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
