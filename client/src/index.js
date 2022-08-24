import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddlewaqre, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App.js';

const store = createStore(reducers, compose(applyMiddlewaqre(thunk)))

ReactDOM.render(<App />, document.getElementById('root'));