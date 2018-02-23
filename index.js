import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux'

import {FilterableCardList} from './containers/App'

require('./styles/style.less');

// let store = createStore

ReactDom.render(<div><FilterableCardList /></div>, document.getElementById('app'));