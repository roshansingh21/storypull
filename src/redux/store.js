import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleWare)),
);

export default store;
