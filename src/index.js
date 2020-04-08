import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';


import registerServiceWorker from './registerServiceWorker';

import counter from './store/reducers/counter';
import results from './store/reducers/result'

const rootReducers = combineReducers({
    ctr:counter,
    res:results
})
const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
