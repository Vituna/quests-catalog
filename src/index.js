import { StrictMode } from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from 'components/app/app';

const store = createStore(rootReducer, composeWithDevTools());

render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
