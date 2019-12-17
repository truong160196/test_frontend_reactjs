import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducers from './reducers/index';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './components/app/App';
import ErrorBoundary from './components/errorHandling/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

const store = createStore(
	appReducers,
	applyMiddleware(thunk),
);
  
ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
