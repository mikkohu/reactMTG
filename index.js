import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import FilterableCardList from './components/App'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

require('./styles/style.less');

const logger = createLogger();

const store = createStore(reducer,
    applyMiddleware(thunk, logger));

ReactDom.render(
    <Provider store={store}>
        <FilterableCardList />
    </Provider>,
    document.getElementById('app'));