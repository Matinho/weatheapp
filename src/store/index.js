import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers'

const initialState = {
	city: 'Mendoza,ar'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//1er parametro reducer, 2do parametro estado inicial de la app
export const store = createStore( reducers, initialState, composeEnhancers(applyMiddleware(thunk))); 
