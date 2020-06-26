/**
 * @fileoverview page-index-entry
 * @author liuduan
 * @Date 2020-06-26 11:52:21
 * @LastEditTime 2020-06-26 14:09:55
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createClientStore } from '@/shared/store';
import App from '@/shared/App';

const store = createClientStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root'),
);