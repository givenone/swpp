import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import mySaga from './sagas';

import {Provider} from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// , + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ,

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store = {store}>

        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
