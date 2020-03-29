import reducers from './reducers';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));
export default store;