import { createStore, compose, applyMiddleware } from "redux"
import reducer from '../reducer/index';
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store