import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware, 
        createLogger()
    )
);

export default store;