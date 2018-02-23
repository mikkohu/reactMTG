import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux'

import {FilterableCardList} from './components/App'

require('./styles/style.less');

// let store = createStore
const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <div><FilterableCardList /></div>
    </Provider>,
    document.getElementById('app'));