/**
 * @fileoverview redux store for client and server
 * @author liuduan
 * @Date 2020-06-26 13:54:41
 * @LastEditTime 2020-06-26 18:58:07
 */

import { createStore } from 'redux';

const initialState = {
};

function reducer(preState = initialState, action) {
    switch (action.type) {
        case 'UPDATE_ABOUT_DATA':
            return {
                ...preState,
                aboutData: action.payload,
            };

        default:
            return preState;
    }
}

export function createServerStore() {
    return createStore(reducer);
}

export function createClientStore() {
    return createStore(reducer, window.__SSR_REDUX_STORE__);
}