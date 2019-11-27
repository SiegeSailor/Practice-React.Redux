import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducer/reducer';
import App from './app';

// 依據我們撰寫的 reducer 建立出 store
let store = createStore(counterApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));